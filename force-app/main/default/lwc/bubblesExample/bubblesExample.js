import { LightningElement } from 'lwc';

export default class BubblesExample extends LightningElement {
    handleClick(e){
        this.template.querySelector('span').dispatchEvent(new CustomEvent('send',{bubbles:true}));

    }
    handleSend(e){
        console.log('premium learning')
    }
}