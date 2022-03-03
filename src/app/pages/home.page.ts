import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lib-home-page',
  templateUrl: './home.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  readonly image = {
    src: 'https://www.wojsko-polskie.pl/law/u/filer_public_thumbnails/ee/eb/eeebd332-a5c9-47b1-b316-9c1820958720/20140721094714-polska-ukraina.jpeg__1920x900_q85_crop_subsampling-2_upscale.jpg',
    alt: 'Polska-Ukraina',
  };
}
