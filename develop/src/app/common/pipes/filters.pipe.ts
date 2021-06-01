import { Pipe, PipeTransform } from '@angular/core';
import {Data} from '../../weathersData'

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(arr: Array<Data>, key: string, val: string ): Array<Data> {
    return arr.filter((data)=> {
      if (data[key] === val) {
        return data
      }
    });
  }
}
