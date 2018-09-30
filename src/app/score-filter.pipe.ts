import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoreFilter'
})
export class ScoreFilterPipe implements PipeTransform {

  transform(value: number) {
    let result = value.toString();
    console.log(value)
    if (value.toString().length < 6) {
      result = this.getZeros(5 - value.toString().length) + value
    }
    return result;
  }
  getZeros(n):string {
    let str:string = '0';
    for (let i = 0; i<n-1; i++){
      str += '0'
    }
    return str
  }
}
