// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAiveZ_SnlNKSbmjIJKtICfulS0aldrJng',
    authDomain: 'angular-firebase-nosql.firebaseapp.com',
    databaseURL: 'https://angular-firebase-nosql.firebaseio.com',
    projectId: 'angular-firebase-nosql',
    storageBucket: 'angular-firebase-nosql.appspot.com',
    messagingSenderId: '512511782652',
    appId: '1:512511782652:web:3a494cdac797a31a15b179',
    measurementId: 'G-GPVQ3FD3PC',
  },
  googleKeys: {
    clientID:
      '512511782652-1931faqhqg414ebslav6m5ki128m2nka.apps.googleusercontent.com',
    clientSecret: 'GmGzFeOMIVpO5tKoBS3RDpSh',
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
