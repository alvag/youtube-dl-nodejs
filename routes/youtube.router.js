const express = require( 'express' );
const app = express();
const youtubeController = require( '../controllers/youtube.controller' );

app.get( '/search/:search/:nextPage?', youtubeController.searchVideo );

module.exports = app;
