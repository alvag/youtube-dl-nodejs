require( 'dotenv' ).config();
const express = require( 'express' );
const app = express();

const bodyParser = require( 'body-parser' );

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

app.use( express.static( __dirname + '/public' ) );

// Configurar cabeceras y cors
app.use( ( req, res, next ) => {
    // res.header("Access-Control-Allow-Origin", config.url);
    res.header( 'Access-Control-Allow-Origin', '*' );
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
    );
    res.header( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE' );
    res.header( 'Allow', 'GET, POST, OPTIONS, PUT, DELETE' );
    next();
} );

app.use( require( './routes/index.router' ) );

app.listen( 3000, '192.168.1.5', () => {
    console.log( `Servidor corriendo en el puerto 3000.` );
} );
