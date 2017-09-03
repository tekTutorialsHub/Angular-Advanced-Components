
import { Component} from '@angular/core';

@Component({
    selector: 'child-component',
    template: `<h2>Child Component</h2>
               current count is {{ count }}
    `
})
export class ChildComponent {
    count = 0;

     increment() {
        this.count++;
      }
    decrement() {
        this.count--;
    }
}



// import { Component, Input  } from '@angular/core';

// @Component({
//     selector: 'child-component',
//     inputs: ['count'],
//     template: `<h2>Child Component</h2>
//                current count is {{count}}
//     `
// })
// export class ChildComponent {}
