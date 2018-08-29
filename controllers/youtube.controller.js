const axios = require( 'axios' );

const searchVideo = async ( req, res ) => {

    let search = req.params.search;
    let nextPage = req.params.nextPage;

    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&q=${search}&maxResults=15&type=video&key=${process.env.YOUTUBE_API_KEY}`;

    if ( nextPage ) {
        url = `${url}&pageToken=${nextPage}`;
    }

    let response = await axios.get( url );

    let tracks = await getInfo( response.data.items );

    res.status( 200 ).json( {
        ok: true,
        nextPage: response.data.nextPageToken,
        tracks,
        data: response.data
    } );

};

const getInfo = ( data ) => {
    let tracks = [];
    data.forEach( track => {
        tracks.push( {
            videoId: track.id.videoId,
            name: track.snippet.title
        } );
    } );

    return tracks;
};

module.exports = {
    searchVideo
};
