import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[DynamicComponentDirective]'
})
export class DynamicComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
