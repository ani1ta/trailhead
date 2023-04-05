import { LightningElement, track } from 'lwc';

export default class MyFirstWebComponent extends LightningElement {
    @track
    contacts = [
        {
            Id: 1,
            Name: 'Annie Mishra',
            Title: 'VP of Engineering',
        },
        {
            Id: 1,
            Name: 'Mannie Myra',
            Title: 'VP pf sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
}