

process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

process.env.CADUCIDAD_TOKEN = 60 * 60* 24 * 30;
process.env.SEED = process.env.SEED || 'secret';

let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

process.env.CLIENT_ID = process.env.CLIENT_ID || '210498600551-ic6dlrpdmlq4j02ku1c3q4bjok8e4kuv.apps.googleusercontent.com';

//mongodb://localhost:27017/cafe
//mongodb://cafe-user:a12345/@ds125365.mlab.com:25365/cafe