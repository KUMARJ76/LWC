import { LightningElement } from 'lwc';
import {NavigationMixin} from "lightning/navigation";
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Loginform extends NavigationMixin(LightningElement) {
    handleNavigate(){

        const event=new ShowToastEvent({
            title:'Toast Success Message',
            message:'Record Submitted',
            variant:'Success',
            mode:'dismissable'
        });

        this.dispatchEvent(event);

        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'case',
                actionName:'new',   
            },

        });

    }
    
}