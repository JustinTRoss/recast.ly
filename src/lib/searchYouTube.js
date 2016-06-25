var videoData;

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      q: 'dog',
      key: API_KEY,
      part: 'snippet',
      max: 10,
      videoEmbeddable: true,
      type: 'video'
    },
    success: function(data) {
      console.log('data received');
      videoData = data;
    },
    error: function() {
      console.log('error!');
    }
  });
};
searchYouTube(); 

window.searchYouTube = searchYouTube;
