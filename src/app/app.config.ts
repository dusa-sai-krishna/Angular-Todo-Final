import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withComponentInputBinding, withRouterConfig} from '@angular/router';
import { routes } from './app.routes';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {providePrimeNG} from "primeng/config";
import {MyPreset} from "../theme/myPreset.theme";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {apiKey} from "../../firebaseAPIKey";

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

    }), provideFirebaseApp(() => initializeApp({ projectId: "angular--todo-b4d2a", appId: "1:749386371889:web:d3d0314c97c063454bd610", storageBucket: "angular--todo-b4d2a.firebasestorage.app", apiKey:apiKey, authDomain: "angular--todo-b4d2a.firebaseapp.com", messagingSenderId: "749386371889" })), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ projectId: "angular--todo-b4d2a", appId: "1:749386371889:web:d3d0314c97c063454bd610", storageBucket: "angular--todo-b4d2a.firebasestorage.app", apiKey: "AIzaSyCEKbYaTnz7swht6CpBGohCx3mr5dg2KsY", authDomain: "angular--todo-b4d2a.firebaseapp.com", messagingSenderId: "749386371889" })), provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({ projectId: "angulartodo", appId: "1:416552608329:web:3ca943d61bfc3a2daf5598", storageBucket: "angulartodo.firebasestorage.app", apiKey: "AIzaSyAcvbk-iUFui1t9Ic7mPpkXw9OpZZwQmS4", authDomain: "angulartodo-3bead.firebaseapp.com", messagingSenderId: "416552608329" })), provideAuth(() => getAuth())
  ]
};
