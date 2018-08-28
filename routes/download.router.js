const express = require( 'express' );
const app = express();
const downloadController = require( '../controllers/download.controller' );

app.get( '/download/:videoId', downloadController.get );

module.exports = app;
