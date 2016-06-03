import {Component} from 'angular2/core'; 

@Component({
    selector: 'pm-app',
    template: `
    <div>
    <h1>{{pageTitle}}</h1>
    <div>Julius' 1st Component</div>
</div>
    `
})
export class AppComponent {
    pageTitle: string = 'Julius Product Management'    
}