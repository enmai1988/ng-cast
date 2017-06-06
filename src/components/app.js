angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',

  controller: function AppController() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = () => {

    };
  }
});
