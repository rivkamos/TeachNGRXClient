import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StudentEffects } from '../store/student.effects';
import { studentReducer } from '../store/student.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(),
    provideStore({students: studentReducer}), 
    provideEffects([StudentEffects]), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
