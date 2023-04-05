// import { LightningElement } from 'lwc';

// export default class App extends LightningElement {
//     Name= 'Annie Mishra';
//     Description= 'A sweet bike built for comfort.';
//     Category='Mountain';
//     Material= 'Steel';
//     Price= '$2,700';
//     pictureUrl= 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
    
// }


// Paste the following into app.js. This holds our data values and sets a 3-second timer. After 3 seconds, the content
//  should appear. (Of course, this is only for testing purposes.)


import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    Name= 'Annie Mishra';
    Description= 'A sweet bike built for comfort.';
    Category='Mountain';
    Material= 'Steel';
    Price= '$2,700';
    pictureUrl= 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
    ready= false;
    connectedCallback(){
        setTimeout(() =>{
            this.ready = true;
        }, 3000);
    }
}