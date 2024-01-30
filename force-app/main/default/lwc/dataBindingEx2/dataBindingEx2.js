import { LightningElement } from 'lwc';

export default class DataBindingEx2 extends LightningElement {
    iamImp="username";
    handleChange(e){
       const y= this.iamImp=e.target.value;
       console.log(y)

    }
}