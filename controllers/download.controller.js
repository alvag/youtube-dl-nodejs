const ytdl = require( 'ytdl-core' );

const get = ( req, res ) => {

    let videoId = req.params.videoId;

    ytdl.getInfo( videoId, ( error, info ) => {
        let audioFormats = ytdl.filterFormats( info.formats, 'audioonly' );

        let data = {
            length_seconds: fmtMSS( info.length_seconds ),
            videoId
        };

        if ( audioFormats.length > 0 ) {
            data.audioFile = audioFormats[ 0 ].url;
        }

        res.status( 200 ).json( {
            ok: true,
            data
        } );
    } );

};

const getVideoURL = ( data ) => {
    let video = data.find( x => x.audioEncoding === 'aac' );

    return video.url;
};

const fmtMSS = ( s ) => {
    return ( s - ( s %= 60 ) ) / 60 + ( 9 < s ? ':' : ':0' ) + s;
};

module.exports = {
    get
};
