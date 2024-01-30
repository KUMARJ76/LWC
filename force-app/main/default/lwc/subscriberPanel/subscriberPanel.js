// subscriberPanel.js
import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsubChannel';

export default class SubscriberPanel extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    color;

    connectedCallback() {
        registerListener("changedColor", this.handleChangedColor, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    handleChangedColor(codeColor) {
        this.color = codeColor;
    }

    get colorStyle() {
        return `background-color:${this.color}`;
    }
}
