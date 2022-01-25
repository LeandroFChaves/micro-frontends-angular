import { Component } from '@angular/core';

import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-angular1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-angular1';

  yoshiUrl = assetUrl("yoshi.png");
}
