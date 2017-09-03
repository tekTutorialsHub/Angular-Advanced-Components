import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <h1>Welcome to {{title}}!</h1>
        <p> current count is {{ClickCounter}} </p>
        <child-component [count]=ClickCounter (countChanged)="countChangedHandler($event)"></child-component>` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Interaction';
  ClickCounter = 5;

  countChangedHandler(count: number) {
    this.ClickCounter = count;
    console.log(count);
  }
}
