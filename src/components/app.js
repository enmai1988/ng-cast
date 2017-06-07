angular.module('video-player')

.component('app', {

  templateUrl: 'src/templates/app.html',

  controller: function AppController(youTube) {
    this.videos = null;
    this.currentVideo = null;

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };

    this.searchResults = (keyword) => {
      youTube.search(keyword, this.submitResults);
    };

    this.submitResults = (data) => {
      this.videos = data;
      if (!this.currentVideo) {
        this.currentVideo = this.videos[0];
      }
    };

    youTube.search('cat', this.submitResults);

  }
});
