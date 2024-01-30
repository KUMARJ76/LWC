import { LightningElement, wire, track } from 'lwc';
import getInputMsg from '@salesforce/apex/DemoMsg.getInputMsg'

export default class StudentAccountDetailsDt extends LightningElement {
    @wire(getInputMsg) studentsData;
    @track columns = [{
        label: 'ID',
        fieldName: 'Id'
    }, {
        label: 'Account Name',
        fieldName: 'Name'
    }, {
        label: 'Phone Number',
        fieldName: 'Phone'
    }]
}