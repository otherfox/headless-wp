import React from 'react';
import settings from './settings';

const WPApi = (params, callback) => {
  const { method, args } = params;

  // Methods
  const methods = {
    /*
    * args: postType, e.g.(post, project)
    * returns posts data as a promise
    */
    getPosts: (postType) => {
      const dataURL = settings.baseUrl+'wp-json/wp/v2/'+postType+'?_embed' ;
      return fetch(dataURL).then(res => res.json());
    },

    /*
    * args: postType, e.g.(post, project), id
    * returns post data as a promise
    */
    getPost: (postType, id) => {
      const dataURL = settings.baseUrl+'wp-json/wp/v2/'+postType+'/'+id;
      return fetch(dataURL).then(res => {
        console.log('happened');
        return res.json()
      });
    }
  }

  return (typeof methods[method] == 'function') ?
    methods[method](...args).then(res => callback(res)) :
    console.log(method+' is not a method of WPApi.');
}

export default WPApi;
