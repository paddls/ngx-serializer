import { map, MonoTypeOperatorFunction } from 'rxjs';
import { NgxSerializerModule } from '../ngx-serializer.module';
import { NgxSerializerService } from '../ngx-serializer.service';
import { SerializerOptions } from '@paddls/ts-serializer';
import { SerializeType } from '@paddls/ts-serializer/dist/common';

export function deserializeAll<T>(type: SerializeType<T> | SerializeType<any>[], options?: SerializerOptions): MonoTypeOperatorFunction<any> {
  return map((value: any[]) => NgxSerializerModule.getInjector().get(NgxSerializerService).deserializeAll(type, value, options));
}
