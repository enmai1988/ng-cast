angular.module('video-player')

.component('search', {
  bindings: {
    searchResults: '<'
  },
  
  templateUrl: 'src/templates/search.html',


  controller: function() {
    this.result = function(keyword) {
      this.searchResults(keyword);
    };
  }
});
