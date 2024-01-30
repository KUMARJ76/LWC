import { LightningElement,api,track } from 'lwc';

export default class CommunicationChild extends LightningElement {
    @track msg;
    @api changeMsg(str){
        this.msg=str.toUpperCase();
    }
}