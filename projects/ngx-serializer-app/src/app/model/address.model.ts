import { JsonProperty } from '@paddls/ngx-serializer';

export class Address {

  @JsonProperty()
  public address: string;

  @JsonProperty()
  public postCode: number;

  @JsonProperty()
  public city: string;

  public constructor(data: Partial<Address> = {}) {
    Object.assign(this, data);
  }
}
