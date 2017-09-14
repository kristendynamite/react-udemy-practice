import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY='AIzaSyA9DhyKVtd3EuOpIif7f9afs57i0A3ZKMU';

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'gwen stefani'}, (videos) => {
      this.setState({ videos });
    });
  }

  render(){
    return  (
      <div>
      <SearchBar />
      <VideoDetail video={this.state.videos[0]}/>
      <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
