import {Inject, Injectable, isDevMode} from '@angular/core';
import {APP_CONFIG, AppConfig} from '../app.config.ts';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private title: string;
  public conf: AppConfig;

  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.conf = config;
  }

}
