// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  currentLanguages:['es','en'], //idiomas disponibles de la aplicación
  defaultLanguage:"es", //idioma por defecto
  firebaseConfig:{ //autenticación firebase
    apiKey: "AIzaSyDX0eGDKPR_D6JG2fb2MtXX34ADqTt2_KA",
    authDomain: "turismo-851ff.firebaseapp.com",
    databaseURL: "https://turismo-851ff.firebaseio.com",
    projectId: "turismo-851ff",
    storageBucket: "turismo-851ff.appspot.com",
    messagingSenderId: "281322616261",
    vuelos: "vuelos",
    hoteles: "hoteles",
    moneda: "moneda"

}
}
