// Importing necessary module from the Lightning Web Components framework
import { LightningElement } from 'lwc';

// Declaring the JethalalChild component class and making it extend LightningElement
export default class JethalalChild extends LightningElement {
    
    // Method to handle the change event on the input field
    handleChange(e) {
        e.preventDefault(); // Preventing the default behavior of the event

        // Getting the value from the input field
        const name = e.target.value;

        // Creating a custom event with the name 'mycustomevent' and passing the 'name' as detail
        const selectEvent = new CustomEvent('mycustomevent', { detail: name, bubbles: true }); // Using with js to dispatch the event

        // Dispatching the custom event to notify the parent component
        this.dispatchEvent(selectEvent);
    }
}
