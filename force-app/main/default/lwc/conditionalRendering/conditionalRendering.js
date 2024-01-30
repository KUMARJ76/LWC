import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isStudent=false;
    handleClick(e){
        this.isStudent=e.target.checked;

    }
}