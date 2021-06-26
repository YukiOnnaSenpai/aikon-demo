import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSuki]'
})
export class SukiDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
