import React from 'react';
import ReactDOM from 'react-dom';
import MainJSApp from './App';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainJSApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
