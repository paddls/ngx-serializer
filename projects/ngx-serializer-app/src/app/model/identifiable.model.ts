import {JsonProperty} from '@paddls/ts-serializer';

export class Identifiable {

  @JsonProperty({readOnly: true})
  public id: string;

  public constructor(data: Partial<Identifiable> = {}) {
    Object.assign(this, data);
  }
}
