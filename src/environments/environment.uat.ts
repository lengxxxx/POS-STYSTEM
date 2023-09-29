// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'http://10.0.166.12:5000/api'
  apiUrl: 'http://10.0.166.18:8181/iam/api',
  roleAdmin: 'ADMIN',
  // apiUrl:'http://172.17.150.250:5000/api',
  pageSize: 5,
  sizeZero: 0,
  currentPage: 0,
  pageSizeOptions: [5, 10, 25, 100],
  maxFiles: 30,
  durationInSeconds: 5,
  du: 1000,
  acceptType: "application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.slideshow, application/vnd.openxmlformats-officedocument.presentationml.presentation, .doc, .docx, text/plain, application/vnd.ms-powerpoint, application/msword, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, image/png, image/gif, image/jpeg",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
