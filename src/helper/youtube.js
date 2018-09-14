import youtube_search from 'youtube-api-v3-search';
import _ from 'lodash';
import { YouTubeKey } from './../../config/config';

exports.video_search = (search_text) => {
  const api_key = YouTubeKey;
  return new Promise((resolve) => {
    console.log('searching for video with text '+search_text);
    youtube_search(api_key, {
        part: 'snippet',
        q: search_text,
        maxResults: 1
      },(error, response) => {
        if(response) {
          console.log('youtube search result found');
          const video_url = 'http://www.youtube.com/watch?v='+ _.get(response, 'items[0].id.videoId')
          resolve(video_url);
        }
      }
    )
  });
}
