
import { Component, Input, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `<h2>Child Component</h2>
               current count is {{ count }}
    `
})
export class ChildComponent implements OnChanges {
    @Input() count: number;

    ngOnChanges(changes: SimpleChanges) {

        for (let property in changes) {
            if (property === 'count') {
              console.log('Previous:', changes[property].previousValue);
              console.log('Current:', changes[property].currentValue);
              console.log('firstChange:', changes[property].firstChange);
            } 
        }
    }
}




