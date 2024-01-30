import { LightningElement,api } from 'lwc';
import AccName from '@salesforce/schema/Account.Name';
import AccPhone from '@salesforce/schema/Account.Phone';
import AccFax from '@salesforce/schema/Account.Fax';

export default class LdsRecordFormEdit extends LightningElement {
    @api recordId;
    accName=AccName;
    accPhone=AccPhone;
    accFax=AccFax;
    handleSubmit(){
        console.log("records created")
       
    }
}