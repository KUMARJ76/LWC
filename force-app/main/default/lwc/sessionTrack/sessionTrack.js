import { LightningElement,track } from 'lwc';

export default class SessionTrack extends LightningElement {
 msg='Good Evening'; //property
    changeHandle(e){
      this.msg=e.target.value
    }
}