# Devdbe - Module Federation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

This is an example project, showing different ways to use Webpack 5's module federation feature.

# How to run
## Start the Microfrontends
```bash
$ ng serve mfe1
$ ng serve mfe2
```
## Start the main application
```bash
$ ng serve main
```
## Navigate to http://localhost:4200/
And see module-federation working!

# Application Structure
## Main
The main application is the 'host' application, which will load remote modules from two microfrontends, called 'mfe1' and 'mfe2'. It is nothing more than a basic application with a navigation header and a simple component, displayed on each tab.

It is deployed on `http://localhost:4200/`.

### Home
The home page contains a short description of this application. It can be reach by navigating to the root `/` or by clicking on the `DEVDBE` brand link.

### MFE1 tab
This tab loads the remote module from microfrontend 1, mfe1, using the lazy loaded routing. The content of this tab is loaded from the remote module: `SomeModule` which is requested via the url: `http://localhost:4201/remoteEntry.js`

### MFE2 tab
This tab loads a module from the `main` application. In here, a component will dynamically load the remote module from microfrontend 2, `mfe2`, based on some environment configuration. Instead of loading it lazy via routing, it gets the `ComponentFactory` from the loaded module and creates a new instance of a component, `BarComponent`. Doing it this way enables you to pass properties to the component instance. The remote module is requested from: `http://localhost:4202/remoteEntry.js`

## MFE1
This application contains a module, `SomeModule`, which is configured to be a remote bundle. It contains the `FooComponent` which displays some simple text.

It is deployed on `http://localhost:4201/`.

## MFE2
This application contains a module, `AnotherModule`, which is a module that has a method to return a `ComponentFactory` for the `BarComponent`. This component has one input property, `name`, which is used to display some formatted text. This is to show how properties can be passes from the `main` application.

It is deployed on `http://localhost:4202/`.

# Module federation configuration
All applications use the helper functions and schematics from the [@angular-architects/module-federation](https://github.com/angular-architects/module-federation-plugin) package.
The `webpack.config.js` files configure webpack to setup the module-federation plugin.

# Environment configuration
The main application includes a script in the `index.html`, the `env.js` script which is located in the `assets/config` folder in the `main` project. This script adds module configuration in the `window.__env` object from the browser. This is read by the `EnvironmentServiceProvider` so components can access this configuration. This enables you to configure the modules which should be loaded from outside the application. 

The idea is that during deployment, you overwrite the contents from `env.js`, and in turn decide whether or not some modules should be loaded.

# Food for thought
- How can you share state between these microfrontends. Do you need a store solution for that? (NgRx)
- How can you push input property updates to a microfrontend?
- What happens to the console.logs from the microfrontends when they are loaded into the main application?