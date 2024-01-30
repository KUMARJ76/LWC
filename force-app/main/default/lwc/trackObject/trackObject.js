import { LightningElement,track } from 'lwc';

export default class TrackObject extends LightningElement {
    @track person={
        name:'neha',
        skill:'lwc',
        cName:'Premium'
    };
    handleSubmit(){
this.person.name='neha saxena'

    }
}