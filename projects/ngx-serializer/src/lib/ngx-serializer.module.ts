import {ModuleWithProviders, NgModule} from '@angular/core';
import {
  DEFAULT_NORMALIZER_CONFIGURATION,
  Denormalizer,
  Normalizer,
  NormalizerConfiguration
} from '@witty-services/ts-serializer';
import {NORMALIZER_CONFIGURATION_TOKEN} from './ngx-serializer.module.di';
import {NgxSerializerService} from './ngx-serializer.service';

export interface Config {
  normalizerConfiguration?: NormalizerConfiguration;
}

export function normalizerFactory(configuration: NormalizerConfiguration = null): Normalizer {
  return new Normalizer(configuration);
}

export function denormalizerFactory(configuration: NormalizerConfiguration = null): Denormalizer {
  return new Denormalizer(configuration);
}

@NgModule({
  providers: [
    {
      provide: Normalizer,
      useFactory: normalizerFactory,
      deps: [NORMALIZER_CONFIGURATION_TOKEN]
    },
    {
      provide: Denormalizer,
      useFactory: denormalizerFactory,
      deps: [NORMALIZER_CONFIGURATION_TOKEN]
    },
    NgxSerializerService
  ]
})
export class NgxSerializerModule {

  public static forRoot(config: Config = {}): ModuleWithProviders<NgxSerializerModule> {
    return {
      ngModule: NgxSerializerModule,
      providers: [
        {
          provide: NORMALIZER_CONFIGURATION_TOKEN,
          useValue: {
            ...DEFAULT_NORMALIZER_CONFIGURATION,
            ...(config.normalizerConfiguration || {})
          }
        }
      ]
    };
  }
}
