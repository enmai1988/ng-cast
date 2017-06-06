angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  // TODO
  templateUrl: 'src/templates/videoListEntry.html',

  controller: function() {
    console.log('video list entry: ', this);
  }
  
});
