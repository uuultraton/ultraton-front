import React from 'react';
import './App.scss';

import Routes from './routes';

// import { Provider } from 'react-redux';
// import { store } from './stores';

function App() {
  return (
    <div className="App">
    {/* <Provider store={store}> */}
      <Routes></Routes>
      {/* </Provider> */}
    </div>
  );
}

export default App;
