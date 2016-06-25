var videoData;

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      q: options.query || 'dog',
      key: options.key || YOUTUBE_API_KEY,
      maxResults: options.max || 5
    },
    success: function(data) {
      console.log('data received');
      callback(data.items);
    },
    error: function() {
      console.log('error!');
    }
  });
};

// searchYouTube();

window.searchYouTube = searchYouTube;
