import {InjectionToken} from '@angular/core';
import {NormalizerConfiguration} from '@witty-services/ts-serializer';

export const NORMALIZER_CONFIGURATION_TOKEN: InjectionToken<NormalizerConfiguration> = new InjectionToken<NormalizerConfiguration>('NORMALIZER_CONFIGURATION_TOKEN');
