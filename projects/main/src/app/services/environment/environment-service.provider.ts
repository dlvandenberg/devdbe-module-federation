import { EnvironmentService } from "./environment.service"

export const ENVIRONMENT_SERVICE_FACTORY = () => {
    const env = new EnvironmentService();

    const browserWindow = window || {};
    const browserWindowEnv = browserWindow['__env'] || {};

    for (const key in browserWindowEnv) {
        if (browserWindowEnv.hasOwnProperty(key)) {
            env[key] = browserWindowEnv[key];
        }
    }

    return env;
};

export const ENVIRONMENT_SERVICE_PROVIDER = {
    provide: EnvironmentService,
    useFactory: ENVIRONMENT_SERVICE_FACTORY,
    deps: []
};