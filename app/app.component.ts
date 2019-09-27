import {Component} from '@angular/core';
import {StoreService} from './shared/store.service.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public store: StoreService) {
  }

}