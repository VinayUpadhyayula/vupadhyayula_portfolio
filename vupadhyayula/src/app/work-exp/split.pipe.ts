import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'textsplit'})
export class Split implements PipeTransform {
    transform(value: string): any {
        const splittedText = value.split("\n");
        return splittedText;
      }
}