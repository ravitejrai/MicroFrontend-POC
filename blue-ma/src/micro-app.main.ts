import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { BlueModule } from './app/blue/blue.module';

if (environment.production) {
  //enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BlueModule, {ngZone: (window as any).ngZone })
  .catch(err => console.error(err));
