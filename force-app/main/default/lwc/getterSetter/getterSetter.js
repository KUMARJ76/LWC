import { LightningElement } from 'lwc';

export default class GetterSetter extends LightningElement {
    _message = 'hello World';
  
    get message() {
        return this._message;
    }
    set message(value) {
        this._message=value.toUpperCase();
    }
    handleChange(e){
        this.message=e.target.value
    }
}   