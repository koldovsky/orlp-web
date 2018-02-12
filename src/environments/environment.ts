// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
  production: false,
  logger: {
    level: NgxLoggerLevel.DEBUG
  },
  providers: {
    google: {
      clientId: '109414995516-fftdn22fnpfdh80fgfsvpq1ht97hdkl5.apps.googleusercontent.com'
    },
    facebook: {
      clientId: '439882899718340',
      apiVersion: 'v2.9'
    }
  },
  SERVER_ADDRESS: 'http://localhost:8080/',
  SITE_KEY: '6LeS2ykUAAAAAMB0_bP2UKSJgI1U5TU9r_al9ESP'
};
