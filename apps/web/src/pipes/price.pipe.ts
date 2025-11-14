import { Pipe, type PipeTransform } from '@angular/core';
import { convertValueToPrice } from 'utils/number';

@Pipe({
  name: 'price',
  standalone: true,
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    return convertValueToPrice(value);
  }

}
