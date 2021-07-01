import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';



@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarComponent
  ]
})
export class AnotherModule {
  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public resolveComponent(): ComponentFactory<BarComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(BarComponent);
  }
}
