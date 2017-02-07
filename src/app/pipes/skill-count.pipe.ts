import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillCount'
})
export class SkillCountPipe implements PipeTransform {

  transform(skills: any, skill: string): any {
    return skills.subscribe( data => data[skill]);
  }

}
