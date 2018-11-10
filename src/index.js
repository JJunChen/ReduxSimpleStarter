import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searth_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from './config/youtubeAPI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }
  
  componentDidMount() {
    this.videoSearch('dog');
  }
  
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 500);
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
          videos={this.state.videos} />
      </div>
    );
  }
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.getElementsByClassName('container')[0]);