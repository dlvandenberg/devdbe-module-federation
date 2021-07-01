import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FooComponent,
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})
export class SomeModule { }
