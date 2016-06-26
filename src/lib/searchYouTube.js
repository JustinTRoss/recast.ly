var searchYouTube = (options, callback) => {

  var generateUrl = () => {
    return `https://www.googleapis.com/youtube/v3/search?key=${options.key || YOUTUBE_API_KEY}&part=snippet&type=video&videoEmbeddable=true&q=${options.query || 'dogs'}&maxResults=${options.max || 10}`;
  };

  fetch(generateUrl()).then(response => {
    return response.json();
  }).then(data => {
    console.log('Data received');
    callback(data.items);
  }).catch(() => {
    console.log("Booo");
  });
  
  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   method: 'GET',
  //   data: {
  //     part: 'snippet',
  //     type: 'video',
  //     videoEmbeddable: true,
  //     q: options.query || 'marmoset',
  //     key: options.key || YOUTUBE_API_KEY,
  //     maxResults: options.max || 5
  //   },
  //   success: function(data) {
  //     console.log('data received');
  //     callback(data.items);
  //   },
  //   error: function() {
  //     console.log('error!');
  //   }
  // });
};

window.searchYouTube = searchYouTube;
