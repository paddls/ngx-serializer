import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { NgxSerializerModule } from '@paddls/ngx-serializer';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      NgxSerializerModule.forRoot()
    )
  ]
};
