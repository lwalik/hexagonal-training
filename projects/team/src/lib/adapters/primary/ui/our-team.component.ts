import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({
  selector: 'lib-our-team',
  templateUrl: './our-team.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamComponent {
  readonly employees$: Observable<EmployeeDTO[]> = of([
    {
      id: '1',
      name: 'Jan',
      imgUrl:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      bio: 'Manager',
    },
    {
      id: '2',
      name: 'Piotr',
      imgUrl:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      bio: 'IT Support',
    },
    {
      id: '3',
      name: 'Łukasz',
      imgUrl:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      bio: 'Developer',
    },
    {
      id: '4',
      name: 'Ksawery',
      imgUrl:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      bio: 'Developer',
    },
    {
      id: '5',
      name: 'Bartek',
      imgUrl:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      bio: 'HR',
    },
  ]);
}
