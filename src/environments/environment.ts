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
