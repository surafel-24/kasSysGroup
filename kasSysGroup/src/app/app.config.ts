import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClient
import { routes } from './app.routes';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, 
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }) 
    ),
    provideHttpClient(),
    importProvidersFrom(RecaptchaV3Module),
    {provide: RECAPTCHA_V3_SITE_KEY, useValue:'6LfnV3sqAAAAAMXt35a2NXbJtpfImh4rajrUhfNe'}
  ],
};
