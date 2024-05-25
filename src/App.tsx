import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Advice from './components/Advice/Advice';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Advice/>
      </Provider>
    </div>
  );
}

export default App;
