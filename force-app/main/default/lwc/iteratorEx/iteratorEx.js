import { LightningElement } from 'lwc';

export default class IteratorEx extends LightningElement {
    course=[{
        id:1,
        name:'LWC',
        isFavourite:true
    },{
        id:2,
        name:'Java',
        isFavourite:false 
    },{
        id:3,
        name:'JavaScript', 
        isFavourite:true
    },{
        id:4,
        name:'AWS Cloud',
        isFavourite:false 
    }]
}