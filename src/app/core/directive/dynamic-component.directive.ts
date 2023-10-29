import { ComponentFactoryResolver, Directive, Input, ViewContainerRef, ViewRef } from '@angular/core';
@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicComponentDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }
  @Input()
  set dynamicComponent(className: any) {

    // Create a component factory for the specified component class.
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(className);

    // Create a component instance from the component factory.
    const componentInstance = this.viewContainerRef.createComponent(componentFactory);

    // Append the component instance to the view container.
    this.viewContainerRef.insert(componentInstance as unknown as ViewRef);
  }
}
