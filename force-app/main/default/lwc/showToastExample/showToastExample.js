import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ShowToastExample extends LightningElement {
handleSuccess(){
    const event=new ShowToastEvent({
        title:'Toast Success Message',
        message:'Record Submitted',
        variant:'Success',
        mode:'dismissable'
    });
    this.dispatchEvent(event);

}
handleInfo(){
    const event=new ShowToastEvent({
        title:'Toast Info Message',
        message:'Record info',
        variant:'Info',
        mode:'dismissable'
    });
    this.dispatchEvent(event);

}
handleError(){
    const event=new ShowToastEvent({
        title:'Toast Error Message',
        message:'Record not Submitted',
        variant:'Error',
        mode:'dismissable'
    });
    this.dispatchEvent(event);

}
handleWarning(){
    const event=new ShowToastEvent({
        title:'Toast Warning Message',
        message:'Record Warning',
        variant:'Warning',
        mode:'dismissable'
    });
    this.dispatchEvent(event);

}

   
}