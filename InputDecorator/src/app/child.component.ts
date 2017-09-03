
import { Component, Input  } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `<h2>Child Component</h2>
               current count is {{ count }}
    `
})
export class ChildComponent {
    @Input() count: number;
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
