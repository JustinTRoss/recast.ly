class App extends React.Component { 

  constructor() {
    super();

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
      input: ''
    };
  }

  componentDidMount() {
    window.searchYouTube({}, function (result) {
      this.setState({
        currentVideo: result[0],
        videos: result
      });
    }.bind(this));
  }

  handleSearchInput(event) {
    this.setState({
      input: event.target.value
    });
  }


  handleSearchClick() {
    var newData = {
      query: this.state.input
    };
    window.searchYouTube(newData, function(data) {
      // reset states
      this.setState({
        currentVideo: data[0],
        videos: data,
      });
    }.bind(this));
  }

  handleClick(event) {
    this.setState({
      currentVideo: event
    });
  }

  render() {
    return <div>
      <Nav passClick={this.handleSearchClick.bind(this)} passInput={this.handleSearchInput.bind(this)}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList passClick={this.handleClick.bind(this)} videos={this.state.videos}/>
      </div>
    </div>;
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


