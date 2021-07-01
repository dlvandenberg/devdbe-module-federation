import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html'
})
export class BarComponent {

  @Input() public name = '';

}
