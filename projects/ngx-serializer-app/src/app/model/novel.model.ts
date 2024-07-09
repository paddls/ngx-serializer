import { Book } from './book.model';
import { JsonTypeSupports } from '@paddls/ngx-serializer';

@JsonTypeSupports((data: { type: string }) => data.type === 'novel')
export class Novel extends Book {
}
