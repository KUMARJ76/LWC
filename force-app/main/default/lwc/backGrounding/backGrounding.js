import { LightningElement } from 'lwc';
import background from '@salesforce/resourceUrl/background'

export default class BackGrounding extends LightningElement {
    get backgroundStyle() {
        return `height:20rem; background-image:url(${background})`;
    }
}