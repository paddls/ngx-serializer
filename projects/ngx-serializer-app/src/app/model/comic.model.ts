import {Book} from './book.model';
import {JsonTypeSupports} from '@witty-services/ts-serializer';

@JsonTypeSupports((data: {type: string}) => data.type === 'comic')
export class Comic extends Book {
}
