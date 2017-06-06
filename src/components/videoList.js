angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },

  templateUrl: 'src/templates/videoList.html',

  controller: function VideoListController() {
    this.onClick = (video) => {
      console.log('clicked');
      console.log(video);
      this.video = video;
    };
  }

});
