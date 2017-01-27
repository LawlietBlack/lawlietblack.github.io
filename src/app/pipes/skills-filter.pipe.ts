import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillsFilter'
})
export class SkillsFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
