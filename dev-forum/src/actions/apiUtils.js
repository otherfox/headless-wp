/* ApiUtils.js
 *
 * Originally from https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb
 *
 * We Updated to es6
*/

var ApiUtils = {
  checkStatus: response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};

export default ApiUtils;
