import { Identifiable } from './identifiable.model';
import { JsonProperty } from '@paddls/ngx-serializer';

export abstract class Book extends Identifiable {

  @JsonProperty('title')
  public title: string;

  @JsonProperty({field: 'editor.id'})
  public editorId: string;

  public constructor(data: Partial<Book> = {}) {
    super(data);

    Object.assign(this, data);
  }
}
