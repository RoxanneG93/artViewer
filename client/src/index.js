import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArtViewer from './containers/ArtViewer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ArtViewer />,
  document.getElementById('root')
);
registerServiceWorker();
