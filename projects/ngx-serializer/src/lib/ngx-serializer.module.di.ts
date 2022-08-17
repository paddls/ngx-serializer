import { InjectionToken } from '@angular/core';
import { IDeserializer, ISerializer, NormalizerConfiguration } from '@paddls/ts-serializer';

export const NORMALIZER_CONFIGURATION_TOKEN: InjectionToken<NormalizerConfiguration> = new InjectionToken<NormalizerConfiguration>('NORMALIZER_CONFIGURATION_TOKEN');
export const ISERIALIZER_TOKEN: InjectionToken<ISerializer> = new InjectionToken<ISerializer>('ISERIALIZER_TOKEN');
export const IDESERIALIZER_TOKEN: InjectionToken<IDeserializer> = new InjectionToken<IDeserializer>('IDESERIALIZER_TOKEN');
