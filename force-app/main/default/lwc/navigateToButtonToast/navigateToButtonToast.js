import { LightningElement } from 'lwc';
import {NavigationMixin} from "lightning/navigation";

export default class NavigateToButtonToast extends NavigationMixin(LightningElement) {
    showToastButtonNavigate(){
        let cmpDef={
            componentDef:'c:navigateEx'
        }
        let encodedDef=btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'one/one.app#'+encodedDef
            }
        });

    }
}