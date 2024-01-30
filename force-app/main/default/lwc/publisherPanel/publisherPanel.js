// publisherPanel.js
import { LightningElement, track, wire } from 'lwc';
import { fireEvent } from 'c/pubsubChannel';
import { CurrentPageReference } from 'lightning/navigation';

export default class PublisherPanel extends LightningElement {
    @track color;
    @wire(CurrentPageReference) pageRef;
    colorsOption = [
        { label: "red", value: "red" },
        { label: "yellow", value: "yellow" },
        { label: "green", value: "green" }
    ];

    changeColor(event) {
        this.color = event.target.value;
    }

    handleChangeColors() {
        fireEvent(this.pageRef, "changedColor", this.color);
    }
}
