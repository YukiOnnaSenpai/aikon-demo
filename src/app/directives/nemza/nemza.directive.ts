import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNemza]'
})
export class NemzaDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
