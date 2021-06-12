import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerApplication, start } from 'single-spa';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


const SystemJS = (window as any).System;
const appsConfig:any = {
  app1: 'https://cdn.jsdelivr.net/gh/patelvimal/ngx-single-spa-pwa/micro-app-1/dist/micro-app1/main.js',
  app2: 'https://cdn.jsdelivr.net/gh/patelvimal/ngx-single-spa-pwa/micro-app-2/dist/micro-app1/main.js'
};

Object.keys(appsConfig).forEach((app) => {
  registerApplication({
    name: app,
    app: () => SystemJS.import(appsConfig[app]),

    activeWhen: [`/${app}`],
  });
});

start({
  urlRerouteOnly: true,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
