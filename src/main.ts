import { ApplicationModule, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';





platformBrowserDynamic().bootstrapModule(ApplicationModule);
(() => console.log('Application started'));
enableProdMode();



if (process.env['NODE_ENV']=== 'production') {
  enableProdMode();
}


