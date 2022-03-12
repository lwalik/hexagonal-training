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
      imgUrl:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      bio: 'Manager',
      age: 24,
      country: {
        id: 'PL',
        name: 'Poland',
      },
      department: {
        id: '1',
        name: 'Jan',
        employeeCount: 1,
      },
    },
    {
      imgUrl:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      bio: 'IT Support',
      age: 25,
      country: {
        id: 'PL',
        name: 'Poland',
      },
      department: {
        id: '2',
        name: 'Piotr',
        employeeCount: 2,
      },
    },
    {
      imgUrl:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      bio: 'Developer',
      age: 25,
      country: {
        id: 'PL',
        name: 'Poland',
      },
      department: {
        id: '3',
        name: 'Łukasz',
        employeeCount: 3,
      },
    },
    {
      imgUrl:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      bio: 'Developer',
      age: 25,
      country: {
        id: 'PL',
        name: 'Poland',
      },
      department: {
        id: '4',
        name: 'Ksawery',
        employeeCount: 4,
      },
    },
    {
      imgUrl:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      bio: 'HR',
      age: 24,
      country: {
        id: 'PL',
        name: 'Poland',
      },
      department: {
        id: '5',
        name: 'Bartek',
        employeeCount: 5,
      },
    },
  ]);
}
