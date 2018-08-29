const express = require( 'express' );
const app = express();

app.use( require( './download.router' ) );
app.use( require( './youtube.router' ) );

module.exports = app;
