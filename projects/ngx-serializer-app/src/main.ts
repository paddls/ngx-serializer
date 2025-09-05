import { enableProdMode } from '@angular/core';
import 'zone.js';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideNgxSerializer } from '../../ngx-serializer/src/lib/ngx-serializer.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideNgxSerializer()
  ]
}).catch((err: Error) => console.error(err));
