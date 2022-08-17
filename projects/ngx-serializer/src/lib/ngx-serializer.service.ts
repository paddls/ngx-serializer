import { Inject, Injectable } from '@angular/core';
import { IDeserializer, ISerializer, Serializer } from '@paddls/ts-serializer';
import { IDESERIALIZER_TOKEN, ISERIALIZER_TOKEN } from './ngx-serializer.module.di';

@Injectable()
export class NgxSerializerService extends Serializer {

  public constructor(@Inject(ISERIALIZER_TOKEN) normalizer: ISerializer,
                     @Inject(IDESERIALIZER_TOKEN) denormalizer: IDeserializer) {
    super(normalizer, denormalizer);
  }
}
