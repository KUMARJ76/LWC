import { LightningElement ,track} from 'lwc';

export default class ProgressIndicatorEx extends LightningElement {
   @track currentStep = '1';
    handleClick(e) {
        this.currentStep = e.target.value;
    }
    get isStepOne(){
        return this.currentStep==='1';
    }
    get isStepTwo(){
        return this.currentStep==='2';
    }
    get isStepThree(){
        return this.currentStep==='3';
    }
    get isStepFour(){
        return this.currentStep==='4';
    }
}