// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiHost: 'https://westeurope.api.cognitive.microsoft.com/vision/v1.0/analyze',
  apiKey: '6c93bac3171a415a97aaf72aa19c4f46',
  googleApiKey: 'AIzaSyDUZKynjx3NmfSh7XDLE0_GAM-wPxBuX2I',
  googleQuery: 'key=AIzaSyDUZKynjx3NmfSh7XDLE0_GAM-wPxBuX2I',
  googleApiHost: 'https://vision.googleapis.com/v1/images:annotate'
};
