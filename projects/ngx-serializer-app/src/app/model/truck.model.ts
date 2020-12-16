import {JsonProperty} from '@witty-services/ts-serializer';
import {Vehicle} from './vehicle.model';

export class Truck extends Vehicle {

  @JsonProperty()
  public payloadCapacity: number;
}
