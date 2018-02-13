import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
  production: true,
  logger: {
    level: NgxLoggerLevel.OFF
  },
  providers: {
    google: {
      clientId: '262473553528-tte4aka34m1av6fnnlgucf4fem06t07g.apps.googleusercontent.com'
    },
    facebook: {
      clientId: '914940615330466',
      apiVersion: 'v2.10'
    }
  },
  SERVER_ADDRESS: 'https://api.infolve.com:443/',
  SITE_KEY: '6LernEQUAAAAAJE8PoPmF1TFt09uu9UlRg9TYK6T'
};
