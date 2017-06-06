angular.module('video-player')

.component('app', {

  templateUrl: 'src/templates/app.html',

  controller: function AppController(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };

    this.searchResults = (keyword) => {
      youTube.search({query: keyword, key: window.YOUTUBE_API_KEY, max: 5}, this.submitResults);
    };

    this.submitResults = (data) => {
      this.videos = data;
    };
  }
});
