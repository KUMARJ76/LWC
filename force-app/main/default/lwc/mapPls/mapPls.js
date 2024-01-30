import { LightningElement } from 'lwc';

export default class MapPls extends LightningElement {
    mapMarkers = {
        location: {
            Street: 'M G Road',
            City: 'Pune',
            State: 'Maharashtra'
        },
        title: 'Pune Premium Learning',
        description: 'Premium Learnings Pune Location',
    };
}
