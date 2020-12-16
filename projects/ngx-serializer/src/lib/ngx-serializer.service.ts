import {Injectable} from '@angular/core';
import {Denormalizer, Normalizer, Serializer} from '@witty-services/ts-serializer';

@Injectable()
export class NgxSerializerService extends Serializer {

  public constructor(normalizer: Normalizer, denormalizer: Denormalizer) {
    super(normalizer, denormalizer);
  }
}
