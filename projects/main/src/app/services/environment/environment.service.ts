import { Injectable } from "@angular/core";

export interface ModuleConfig {
    remoteEntry: string,
    remoteName: string
}

@Injectable({
    providedIn: 'root'
})
export class EnvironmentService {
    private modules: {
        [key: string]: ModuleConfig
    } = {}

    constructor() {}

    public hasModuleWithName(name: string): boolean {
        return this.modules.hasOwnProperty(name);
    }

    public getModuleConfiguration(name: string): ModuleConfig | undefined {
        return this.hasModuleWithName(name) ? this.modules[name] : undefined
    }
}