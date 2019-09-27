import {InjectionToken} from '@angular/core';

export class AppConfig {
  medium: number;
  large: number;
}

export const WIDTH_CONFIG: AppConfig = {
  medium: 600,
  large: 900
};
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
