// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: process.env.FIREBASE_APIKEY,
		authDomain: 'cpepper-run.firebaseapp.com',
		databaseURL: 'https://cpepper-run.firebaseio.com',
		projectId: 'cpepper-run',
		storageBucket: '',
		messagingSenderId: '947923577173'
	}
};
