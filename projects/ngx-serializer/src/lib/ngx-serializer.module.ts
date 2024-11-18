import {Injector, ModuleWithProviders, NgModule, Provider} from '@angular/core';
import { DEFAULT_NORMALIZER_CONFIGURATION, Denormalizer, IDeserializer, ISerializer, Normalizer, NormalizerConfiguration } from '@paddls/ts-serializer';
import { IDESERIALIZER_TOKEN, ISERIALIZER_TOKEN, NORMALIZER_CONFIGURATION_TOKEN } from './ngx-serializer.module.di';
import { NgxSerializerService } from './ngx-serializer.service';

export interface Config {
  normalizerConfiguration?: NormalizerConfiguration;
}

export function serializerFactory(configuration: NormalizerConfiguration = null): ISerializer {
  return new Normalizer(configuration);
}

export function deserializerFactory(configuration: NormalizerConfiguration = null): IDeserializer {
  return new Denormalizer(configuration);
}

const PROVIDERS: Provider[] = [
  {
    provide: ISERIALIZER_TOKEN,
    useFactory: serializerFactory,
    deps: [NORMALIZER_CONFIGURATION_TOKEN]
  },
  {
    provide: IDESERIALIZER_TOKEN,
    useFactory: deserializerFactory,
    deps: [NORMALIZER_CONFIGURATION_TOKEN]
  },
  NgxSerializerService
];

@NgModule()
export class NgxSerializerModule {

  private static injector: Injector;

  public constructor(injector: Injector) {
    NgxSerializerModule.injector = injector;
  }

  public static getInjector(): Injector {
    return NgxSerializerModule.injector;
  }

  public static forRoot(config: Config = {}): ModuleWithProviders<NgxSerializerModule> {
    return {
      ngModule: NgxSerializerModule,
      providers: [
        ...PROVIDERS,
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
