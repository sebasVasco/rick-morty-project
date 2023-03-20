import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseurlapiInterceptor } from '@app/core/interceptors/baseurlapi.interceptor';
import { BASE_URL } from '@app/core/services/endpoints.tokens';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseurlapiInterceptor,
      multi: true,
    },
    {
      provide: BASE_URL,
      useValue: 'https://rickandmortyapi.com/api',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
