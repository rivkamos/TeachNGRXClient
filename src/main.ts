import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  // bootstrapApplication(AppComponent, {
  //   providers: [
  //     provideHttpClient(),
  //     provideStore({ students: studentReducer }),
  //     provideEffects([StudentEffects]),
  //     provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode()})
  //   ]
  // })
  //   .catch((err) => console.error(err));
