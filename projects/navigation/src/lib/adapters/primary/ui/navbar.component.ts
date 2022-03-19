import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavLinksDTO } from '../../../application/ports/secondary/nav-links.dto';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly links$: Observable<NavLinksDTO[]> = of([
    {
      name: 'HOME',
      link: '/',
    },
    {
      name: 'ABOUT',
      link: 'about',
    },
    {
      name: 'EMPLOYEES',
      link: 'employee',
    },
    {
      name: 'KONTAKT',
      link: 'kontakt',
    },
    {
      name: 'ADMIN',
      link: 'admin',
    },
  ]);
}
