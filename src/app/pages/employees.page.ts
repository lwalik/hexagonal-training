import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'lib-employees-page',
  templateUrl: './employees.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesPage {
  readonly employees$ = of([
    {
      name: 'Jan',
      imgSrc:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      alt: 'Employee',
      description: 'Manager',
    },
    {
      name: 'Piotr',
      imgSrc:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      alt: 'Employee',
      description: 'IT Support',
    },
    {
      name: 'Łukasz',
      imgSrc:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      alt: 'Employee',
      description: 'Developer',
    },
    {
      name: 'Ksawery',
      imgSrc:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      alt: 'Employee',
      description: 'Developer',
    },
    {
      name: 'Bartek',
      imgSrc:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      alt: 'Employee',
      description: 'HR',
    },
  ]);
}
