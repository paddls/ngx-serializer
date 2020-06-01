import {Identifiable} from './identifiable.model';
import {Book} from './book.model';
import {Address} from './address.model';
import {DateConverter, JsonProperty} from '@witty-services/ts-serializer';

export class Library extends Identifiable {

  @JsonProperty()
  public name: string;

  @JsonProperty({ field: 'addr', type: () => Address})
  public address: Address;

  @JsonProperty({field: 'test', writeOnly: true})
  public test: string;

  @JsonProperty()
  public opened: boolean;

  @JsonProperty({field: 'createdAt', customConverter: () => DateConverter})
  public createdAt: Date;

  @JsonProperty(() => Book)
  public books$: Book[];

  public constructor(data: Partial<Library> = {}) {
    super(data);

    Object.assign(this, data);

    this.test = 'test';
  }
}
