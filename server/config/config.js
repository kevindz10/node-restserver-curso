// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
// process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.CADUCIDAD_TOKEN = '60h';


// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'secret-word-on-develop';

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//===========================
// google client ID
//===========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '178211854394-dlt8elm1e6h95mqg7uk8bua1hdh1ud9l.apps.googleusercontent.com'