import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { AboutUsDTO } from '../../../application/ports/secondary/about-us.dto';

@Component({
  selector: 'lib-about-us',
  templateUrl: './about-us.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  readonly cards$: Observable<AboutUsDTO[]> = of([
    {
      id: '1',
      imgSrc:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      text: 'Manager',
    },
    {
      id: '2',
      imgSrc:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      text: 'IT Support',
    },
    {
      id: '3',
      imgSrc:
        'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg',
      text: 'Developer',
    },
  ]);
}
