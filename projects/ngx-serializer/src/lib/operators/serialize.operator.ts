import { map, MonoTypeOperatorFunction } from 'rxjs';
import { NgxSerializerModule } from '../ngx-serializer.module';
import { NgxSerializerService } from '../ngx-serializer.service';
import { SerializerOptions } from '@paddls/ts-serializer';

export function serialize<T>(options?: SerializerOptions): MonoTypeOperatorFunction<T> {
  return map((value: any) => NgxSerializerModule.getInjector().get(NgxSerializerService).serialize(value, options));
}
