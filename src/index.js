import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searth_bar';

import API_KEY from './config/youtubeAPI';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.getElementsByClassName('container')[0]);