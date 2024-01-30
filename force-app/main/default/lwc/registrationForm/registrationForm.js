import { LightningElement } from 'lwc';
import {NavigationMixin} from "lightning/navigation";
export default class RegistrationForm extends NavigationMixin(LightningElement) {
    navToLogin(){
        let cmpDef={
            componentDef:'c:loginform'
        }
        let encodedDef=btoa(JSON.stringify(cmpDef))
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'one/one.app#'+encodedDef
            }
        });

    }
}