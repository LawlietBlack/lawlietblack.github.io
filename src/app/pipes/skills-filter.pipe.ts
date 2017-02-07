import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillsFilter'
})
export class SkillsFilterPipe implements PipeTransform {

  transform(projects: any, filter?: string): any {
    if(filter === 'all') return projects;
    return projects.filter(project => project.skills.indexOf(filter) >= 0);
  }

}
