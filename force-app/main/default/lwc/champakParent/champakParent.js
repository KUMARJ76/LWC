// Importing necessary modules from the Lightning Web Components framework
import { LightningElement, track } from 'lwc';

// Declaring the ChampakParent component class and making it extend LightningElement
export default class ChampakParent extends LightningElement {
    
    @track msg; // Using @track to make the property reactive

    // Method to handle the custom event triggered by the child component
    handleCustomEvent(e) {
        // Assuming the detail is a string value received from the child component
        const textValue = e.detail;
        this.msg = textValue; // Update the tracked property with the received value
    }

    // Constructor for the ChampakParent component
    constructor(){
        super();
        
        // Adding an event listener for the custom event 'mycustomevent' 
        // and binding it to the handleCustomEvent method to handle the event when it occurs
        this.template.addEventListener('mycustomevent', this.handleCustomEvent.bind(this));
    }
}
