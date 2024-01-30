import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {
    constructor() {
        super();
        console.log('I am a parent component constructor')
    }
    connectedCallback() {
        console.log('I am a parent component callback method')
    }
    renderedCallback() {
        console.log('I am a parent component renderedCallback method')
    }
    disconnectedCallback() {
        console.log('I am a parent component disconnectedCallback method')
    }
}