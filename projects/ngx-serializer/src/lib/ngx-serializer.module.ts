import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxSerializerService} from './ngx-serializer.service';
import {
  DEFAULT_NORMALIZER_CONFIGURATION,
  Denormalizer,
  Normalizer,
  NormalizerConfiguration
} from '@witty-services/ts-serializer';
import {NORMALIZER_CONFIGURATION_TOKEN} from './ngx-serializer.module.di';

export interface Config {
  normalizerConfiguration?: NormalizerConfiguration;
}

export function normalizerFactory(configuration: NormalizerConfiguration = null) {
  return new Normalizer(configuration);
}

export function denormalizerFactory(configuration: NormalizerConfiguration = null) {
  return new Denormalizer(configuration);
}

export function serializerFactory(normalizer: Normalizer, denormalizer: Denormalizer) {
  return new NgxSerializerService(normalizer, denormalizer);
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
    {
      provide: NgxSerializerService,
      useFactory: serializerFactory,
      deps: [Normalizer, Denormalizer]
    }
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
