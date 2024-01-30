import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {
    constructor() {
        super();
        console.log('I am a child component constructor')
    }
    connectedCallback() {
        console.log('I am a child component callback method')
    }
    renderedCallback() {
        console.log('I am a child component renderedCallback method')
    }
    disconnectedCallback() {
        console.log('I am a child component disconnectedCallback method')
    }
}