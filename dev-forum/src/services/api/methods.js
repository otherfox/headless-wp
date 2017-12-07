import settings from './settings';

// Methods

/*
* args: postType, e.g.(post, project)
* returns dataurl for posts request
*/

function getPosts(postType) {
    return settings.baseUrl+'wp-json/wp/v2/'+postType+'?_embed' ;
}

/*
* args: postType, e.g.(post, project), id
* returns dataurl for post request
*/

function getPost(postType, id) {
    return settings.baseUrl+'wp-json/wp/v2/'+postType+'/'+id;
}


module.exports = {
    getPosts: getPosts,
    getPost: getPost,
};
