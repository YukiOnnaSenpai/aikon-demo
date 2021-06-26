import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSnortija]'
})
export class SnortijaDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
