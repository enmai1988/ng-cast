angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',

  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = () => {

    };
    this.searchResults = () => {

    };
    this.getVideos = () => {
      return this.videos;
    };
  }
});
