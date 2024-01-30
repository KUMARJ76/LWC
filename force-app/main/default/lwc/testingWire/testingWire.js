import { LightningElement ,wire} from 'lwc';
import getInputMsg from '@salesforce/apex/DemoMsg.getInputMsg';
export default class TestingWire extends LightningElement {

    //wire decorator as a property
    @wire(getInputMsg) accounts;
}