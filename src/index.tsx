import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const node = document.getElementById('root');
const renderApplication = (): void => ReactDOM.render(<App />, node);

renderApplication();

if (module.hot) {
  module.hot.accept('./components/App', renderApplication);
}
