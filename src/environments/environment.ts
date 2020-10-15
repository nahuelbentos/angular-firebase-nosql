// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'YOUR-API-KEY',
    authDomain: 'YOUR-AUTH-DOMAIN',
    databaseURL: 'YOUR-DATABASE-URL',
    projectId: 'YOUR-PROJECT-ID',
    storageBucket: 'YOUR-STORAGE-BUCKET',
    messagingSenderId: 'YOUR-MESSAGING-SENDER-ID',
    appId: 'YOUR-APP-ID',
    measurementId: 'YOUR-MEASUREMENT-ID',
  },
  googleKeys: {
    clientID: 'YOUR-CLIENT-ID',
    clientSecret: 'YOUR-CLIENT-SECRET',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
