import {Pipe, PipeTransform} from '@angular/core';
import {Data} from '../../weathersData'

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(arr: Array<Data>, key: string, val: string): Data {
    return arr.find((data) => data[key] === val)
  }
}
