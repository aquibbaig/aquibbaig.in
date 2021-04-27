import querystring from 'querystring';

const client_id = process.env.GATSBY_SPOTIFY_CLIENT_ID;
const client_secret = process.env.GATSBY_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.GATSBY_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json();
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  .then(res => res.json())
  .then(data => data.items);

  // sanitise the items.
  let ret = [];
  response.forEach(item => {
    ret.push({
      "artist": item.artists[0].name,
      "album": item.album.name,
      "song": item.name,
      "url": item.external_urls.spotify
    });
  });

  return ret;
};
