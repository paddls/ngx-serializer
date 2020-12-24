import {JsonProperty, JsonSubTypes} from '@witty-services/ts-serializer';

@JsonSubTypes<Vehicle>({
  field: 'type',
  types: {
    CAR: () => Car,
    TRUCK: () => Truck
  }
})
export abstract class Vehicle {

  @JsonProperty()
  public name: string;
}

export class Car extends Vehicle {

  @JsonProperty()
  public seatingCapacity: number;
}

export class Truck extends Vehicle {

  @JsonProperty()
  public payloadCapacity: number;
}
