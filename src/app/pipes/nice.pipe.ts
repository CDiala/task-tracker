import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nice',
  standalone: true,
})
export class NicePipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    const length = +args[0] || 15; // set default length if not provided

    if (value) {
      if (value.length > length) {
        return `${value.substring(0, length).trim()}...`;
      }
    }
    return value;
  }
}
