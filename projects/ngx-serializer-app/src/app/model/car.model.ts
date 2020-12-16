import {JsonProperty} from '@witty-services/ts-serializer';
import {Vehicle} from './vehicle.model';

export class Car extends Vehicle {

  @JsonProperty()
  public seatingCapacity: number;
}
