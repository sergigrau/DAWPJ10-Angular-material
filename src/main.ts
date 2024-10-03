import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { M01_SalutacioComponent } from './app/m01-salutacio.component.ts';  
import { M02_SumaComponent } from './app/m02-suma.component';
import { M02_SumaComponent_bis } from './app/src/app/m02bis-suma.component';

bootstrapApplication(M02_SumaComponent_bis, appConfig)
  .catch((err) => console.error(err));
