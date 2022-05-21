import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, len: number = 3): string {
    return value.substring(0, len) + '...' + value.substring(10-len, 10);
  }

}
