import { map, MonoTypeOperatorFunction } from 'rxjs';
import { NgxSerializerModule } from '../ngx-serializer.module';
import { NgxSerializerService } from '../ngx-serializer.service';
import { SerializerOptions } from '@paddls/ts-serializer';

export function serializeAll<T>(options?: SerializerOptions): MonoTypeOperatorFunction<any[]> {
  return map((value: T[]) => NgxSerializerModule.getInjector().get(NgxSerializerService).serializeAll(value, options));
}
