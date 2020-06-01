import {Injectable} from '@angular/core';
import {Serializer} from '@witty-services/ts-serializer';

@Injectable()
export class NgxSerializerService extends Serializer {

  public deserialize<T>(type: new() => T, data: any): T {
    return super.deserialize(type, data);
  }

  public deserializeAll<T>(type: new() => T, data: any[]): T[] {
    if (!Array.isArray(data)) {
      throw new Error(`${data} is not an array.`);
    }

    return data.map((value: any) => super.deserialize(type, value));
  }

  public serialize<T>(object: T): any {
    return super.serialize(object);
  }

  public serializeAll<T>(objects: T[]): any[] {
    if (!Array.isArray(objects)) {
      throw new Error(`${objects} is not an array.`);
    }

    return objects.map((value: T) => super.serialize(value));
  }
}
