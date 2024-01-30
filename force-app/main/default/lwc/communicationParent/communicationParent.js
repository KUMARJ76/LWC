import { LightningElement } from 'lwc';

export default class CommunicationParent extends LightningElement {
    handleChange(event){
        console.log(event.target.value)
        this.template.querySelector('c-communication-child').changeMsg(event.target.value)

    }
}