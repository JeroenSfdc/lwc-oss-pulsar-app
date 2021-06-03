/*
    Followed these instructions to have SLDS included
    https://salesforce.stackexchange.com/questions/323613/lightning-open-source-use-of-base-components
*/
import { createElement } from 'lwc';
import MyApp from 'my/app';
import '@lwc/synthetic-shadow';


console.log('Inside top-level index.html');
const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);


