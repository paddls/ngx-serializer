import { Injector, Provider, ModuleWithProviders, NgModule, APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
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

/**
 * @ignore
 */
function ngxSerializerInitializer(injector: Injector): () => void {
  return () => {
    NgxSerializerModule.injector = injector;
  }
}

const MODULE_PROVIDERS: Provider[] = [
  {
    provide: APP_INITIALIZER,
    useFactory: ngxSerializerInitializer,
    multi: true,
    deps: [Injector]
  },
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

export function provideNgxSerializer(config: Config = {}): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: NORMALIZER_CONFIGURATION_TOKEN,
      useValue: {
        ...DEFAULT_NORMALIZER_CONFIGURATION,
        ...(config?.normalizerConfiguration || {})
      },
    },
    ...MODULE_PROVIDERS
  ]);
}

@NgModule()
export class NgxSerializerModule {

  public static injector: Injector;

  public static getInjector(): Injector {
    return NgxSerializerModule.injector;
  }

  /**
   * @deprecated Use provideNgxSerializer() instead
   */
  public static forRoot(config: Config = {}): ModuleWithProviders<NgxSerializerModule> {
    return {
      ngModule: NgxSerializerModule,
      providers: [
        provideNgxSerializer(config)
      ]
    };
  }
}
