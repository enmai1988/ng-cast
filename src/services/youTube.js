angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(params, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: params.query,
        max: params.max,
        key: params.key,
        type: 'video',
        part: 'snippet',
        videoEmbeddable: true
      },
      type: 'json'
    }).then(function(response) {
      callback(response.data.items);
    }, function(response) {
      console.log('failed');
    });
  };
});
