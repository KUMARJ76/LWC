import { LightningElement, wire, track } from 'lwc';
import getInputMsg from '@salesforce/apex/DemoMsg.getInputMsg';
export default class WireDecoratorAsAMethod extends LightningElement {

    @track accounts;
    @track error;
    //wire as amethod
    @wire(getInputMsg) wireAccount({ data, error }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            this.error = error;
            console.log(error);
        }
    }
}