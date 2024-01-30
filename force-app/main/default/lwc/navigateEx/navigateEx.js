import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateEx extends NavigationMixin(LightningElement) {
    handleNavigate(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'case',
                actionName:'new',   
            },

        });
    }
}