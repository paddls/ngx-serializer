import {JsonProperty, JsonSubTypes} from '@witty-services/ts-serializer';
import {Car} from './car.model';
import {Truck} from './truck.model';

@JsonSubTypes<Vehicle>({
  field: 'type',
  types: {
    CAR: Car,
    TRUCK: Truck
  }
})
export abstract class Vehicle {

  @JsonProperty()
  public name: string;
}
