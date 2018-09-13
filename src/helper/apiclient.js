import needle from 'needle';

exports.get_from_API = (path) => {
  return new Promise((resolve) => {
    console.log('sending request to '+path);
    needle.get(path, (error, response) => {
      if(error) {
        console.log(error, error.stack);
      }
      console.log('response received from '+path);
      resolve(response.body);
    })
  });
}
