import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markFilter'
})
export class MarkFilterPipe implements PipeTransform {
  mark = "Let's start!";
  marks = ['Bad','Ok','Normal','Good','Perfect'];
  transform(marks: string[], time: number) {
    let result;
    if (time > 3000) {
      this.mark = this.marks[0]
    } else if (time > 2000) {
      this.mark = this.marks[1]
    } else if (time > 1500) {
      this.mark = this.marks[2]
    } else if (time > 1000) {
      this.mark = this.marks[3]
    } else if (time > 500) {
      this.mark = this.marks[4]
    } else if (time != 0){
      this.mark = this.marks[4] + '+'
    }
    return this.mark;
  }

}
