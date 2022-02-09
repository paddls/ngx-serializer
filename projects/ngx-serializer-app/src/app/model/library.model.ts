import {Identifiable} from './identifiable.model';
import {Book} from './book.model';
import {Address} from './address.model';
import {DateConverter, JsonProperty} from '@paddls/ts-serializer';
import {Comic} from './comic.model';
import {Novel} from './novel.model';

export class Library extends Identifiable {

  @JsonProperty({groups: 'justName'})
  public name: string;

  @JsonProperty({ field: 'addr', type: () => Address})
  public address: Address;

  @JsonProperty({field: 'test', writeOnly: true})
  public test: string;

  @JsonProperty()
  public opened: boolean;

  @JsonProperty({field: 'createdAt', customConverter: () => DateConverter})
  public createdAt: Date;

  @JsonProperty(() => [Comic, Novel])
  public books: Book[];

  public constructor(data: Partial<Library> = {}) {
    super(data);

    Object.assign(this, data);

    this.test = 'test';
  }
}
