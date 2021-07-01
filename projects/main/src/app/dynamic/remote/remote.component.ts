import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { Compiler, Component, Injector, Input, NgModuleRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss']
})
export class RemoteComponent implements OnInit {
  @ViewChild('remote', { read: ViewContainerRef })
  public remote: ViewContainerRef;

  @Input() public remoteEntry: string;
  @Input() public remoteName: string;
  @Input() public exposedModule: string;
  @Input() public componentName: string;
  @Input() public moduleName: string;
  @Input() public props: {
    [key: string]: any;
  };

  constructor(
    private readonly injector: Injector,
    private readonly compiler: Compiler
  ) { }

  ngOnInit(): void {
    // TODO check via service if component can be loaded.
    this.loadModule();
  }

  private async loadModule(): Promise<any> {
    loadRemoteModule({
      remoteEntry: this.remoteEntry,
      remoteName: this.remoteName,
      exposedModule: this.exposedModule
    }).then(async (remoteModule) => {
      let ref;
      try {
        this.remote.clear();

        const moduleFactory = await this.compiler.compileModuleAsync(remoteModule[this.moduleName]);
        const moduleRef: NgModuleRef<any>= moduleFactory.create(this.injector);
        const componentFactory = moduleRef.instance.resolveComponent();
        ref = this.remote.createComponent(componentFactory, null, moduleRef.injector);

        // Copy properties
        for (const key in this.props) {
          if (this.props.hasOwnProperty(key)) {
            ref.instance[key] = this.props[key];
          }
        }
      } catch (e) {
        console.error(e);
      }
    })
  }

}
