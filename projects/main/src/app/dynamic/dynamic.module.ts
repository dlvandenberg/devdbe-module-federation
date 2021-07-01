import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryComponent } from './factory/factory.component';
import { RouterModule, Routes } from '@angular/router';
import { RemoteComponent } from './remote/remote.component';

const ROUTES: Routes = [
  {
    path: '',
    component: FactoryComponent
  }
]

@NgModule({
  declarations: [
    FactoryComponent,
    RemoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class DynamicModule { }
