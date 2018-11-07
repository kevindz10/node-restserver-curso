// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
    
} else {
    // urlDB = process.env.MONGO_URI;
    urlDB ='mongodb://kevind:12345a@ds155263.mlab.com:55263/cafe_node';
}
process.env.URLDB = urlDB;



