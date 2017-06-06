angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<'
  },

  templateUrl: 'src/templates/videoList.html',

  controller: function() {
    console.log('video list', this);
  }

});
