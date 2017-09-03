
import { Component, Input} from '@angular/core';

@Component({
    selector: 'child-component',
    template: `<h2>Child Component</h2>
               current count is {{ count }}
    `
})
export class ChildComponent  {

    private _count = 0;

    @Input()
    set count(count: number) {
        this._count = count;
        console.log(count);
      }
    get count(): number { return this._count; }

}




