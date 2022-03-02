import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value.length > 15)
      return value.substring(0,15).concat("...");
    return value
  }

}
