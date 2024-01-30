import { LightningElement ,track,api} from 'lwc';
import NAME_Field from "@salesforce/schema/Account.Name"
import ANNUAL_REVENUE from "@salesforce/schema/Account.AnnualRevenue"
import PHONE from "@salesforce/schema/Account.Phone"
import USERNAME from "@salesforce/schema/Account.Username__c"
import PASSWORD from "@salesforce/schema/Account.Password__c"

export default class CreateModalPop extends LightningElement {
    @track showModal

 
    handleSuccess(e){
        this.showModal=true;
        this.recordId=e.detail.id
       
    }
    closeModal(){
        this.showModal=false;
    }
    @api recordId
    @track fields = [NAME_Field, ANNUAL_REVENUE, PHONE, USERNAME, PASSWORD];
    handleSubmitBtn(e) {
        console.log(e.detail.fields)
       
    }
}