import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <h1>Welcome to {{title}}!</h1>
        <button (click)="increment()">Increment</button>
        <button (click)="Decrement()">Decrement</button>
        <child-component [count]=ClickCounter></child-component>` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Interaction';
  ClickCounter = 5;

  increment() {
    this.ClickCounter++;
  }

  Decrement() {
    this.ClickCounter--;
  }

}
