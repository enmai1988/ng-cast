angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '&'
  },

  templateUrl: 'src/templates/videoList.html',

  controller: function VideoListController() {
    this.onClick = (video) => {
      this.selectVideo({video: video});
    };
  }

});
