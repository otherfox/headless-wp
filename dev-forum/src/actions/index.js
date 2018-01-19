import axios from 'axios';
import Settings from '../settings';
import ApiUtils from './apiUtils';

const ROOT_URL = `${Settings.baseUrl}wp-json/wp/v2/`;

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts(postType = 'posts') {
  console.log(`fetching posts: ${postType}`);
  const dataURL = ROOT_URL + postType;

  return {
    type: FETCH_POSTS,
    payload: axios.get(dataURL).then(ApiUtils.checkStatus),
  }
}
