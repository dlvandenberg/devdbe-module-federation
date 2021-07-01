import { Component, OnInit } from '@angular/core';
import { EnvironmentService, ModuleConfig } from '../../services/environment/environment.service';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {

  public hasModule = false;
  public moduleConfig: ModuleConfig;

  constructor(public readonly environmentService: EnvironmentService) { }

  public ngOnInit(): void {
    if (this.environmentService.hasModuleWithName('mfe2')) {
      this.hasModule = true;
      this.moduleConfig = this.environmentService.getModuleConfiguration('mfe2');
    }
  }

}
