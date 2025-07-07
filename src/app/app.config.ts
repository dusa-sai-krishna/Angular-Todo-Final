import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withComponentInputBinding, withRouterConfig} from '@angular/router';
import { routes } from './app.routes';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {providePrimeNG} from "primeng/config";
import {MyPreset} from "../theme/myPreset.theme";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withComponentInputBinding(),withRouterConfig({
      paramsInheritanceStrategy:"always"
    })),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset:MyPreset,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      },
      ripple:true,

    })
  ]
};
