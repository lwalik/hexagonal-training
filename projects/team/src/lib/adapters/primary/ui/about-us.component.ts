import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'lib-about-us',
  templateUrl: './about-us.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  readonly cards$ = of([
    {
      imgSrc:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      alt: 'first Employee',
      description: 'Manager',
    },
    {
      imgSrc:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      alt: 'second Employee',
      description: 'IT Support',
    },
    {
      imgSrc:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      alt: 'third Employee',
      description: 'Developer',
    },
  ]);
}
