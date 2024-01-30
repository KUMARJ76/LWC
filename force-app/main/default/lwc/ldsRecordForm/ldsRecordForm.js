import { LightningElement, api, track } from 'lwc';
import NAME_Field from "@salesforce/schema/Account.Name"
import ANNUAL_REVENUE from "@salesforce/schema/Account.AnnualRevenue"
import PHONE from "@salesforce/schema/Account.Phone"
import USERNAME from "@salesforce/schema/Account.Username__c"
import PASSWORD from "@salesforce/schema/Account.Password__c"
import BILING_ADD from '@salesforce/schema/Account.BillingAddress'

export default class LdsRecordForm extends LightningElement {
    @api recordId
    @track fields = [NAME_Field, ANNUAL_REVENUE, PHONE,BILING_ADD, USERNAME, PASSWORD];
    handleSubmit(e) {
        console.log(e.detail.fields)
    }
}