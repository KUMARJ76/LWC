// pubsubChannel.js
const callbacks = {};

export function registerListener(eventName, callback, thisArg) {
    if (!callbacks[eventName]) {
        callbacks[eventName] = [];
    }
    callbacks[eventName].push({ callback, thisArg });
}

export function unregisterAllListeners(thisArg) {
    for (const eventName in callbacks) {
        callbacks[eventName] = callbacks[eventName].filter(listener => listener.thisArg !== thisArg);
    }
}

export function fireEvent(pageRef, eventName, eventData) {
    if (callbacks[eventName]) {
        callbacks[eventName].forEach(listener => {
            try {
                listener.callback.call(listener.thisArg, eventData);
            } catch (error) {
                // Handle error if needed
                console.error(`Error in handling event '${eventName}': ${error.message}`);
            }
        });
    }
}
