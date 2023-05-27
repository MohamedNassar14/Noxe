import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watch'
})
export class WatchPipe implements PipeTransform {

  transform(titles:string): string {
    return `watch ${titles}`;
  }

}
