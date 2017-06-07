angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(keyword, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: keyword,
        max: 5,
        key: window.YOUTUBE_API_KEY,
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
