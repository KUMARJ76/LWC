import { LightningElement,track } from 'lwc';
import getAccounts from '@salesforce/apex/DemoMsg.getAccounts'

export default class ImparativelyMethodEx extends LightningElement {
    @track accounts;
    @track errors;

    handleSearch(event){
        const searchKey=event.target.value;
        getAccounts({strName:searchKey}).then(result=>{
            this.accounts=result;
            this.error=undefined;
        }).catch(error=>{
            this.error=this.error;
            this.accounts=undefined;
        })
    }
}