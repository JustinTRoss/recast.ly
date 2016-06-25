class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentVideo: props.videoData[0],
      videos: props.videoData
    };
  }

  handleClick(event) {
    this.setState({
      currentVideo: event
    });
  }


  render() {
    return <div>
      <Nav />
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


