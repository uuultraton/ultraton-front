import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/organisms/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import LogIn from './pages/LogIn/LogIn';
<<<<<<< HEAD
import PlayToLearn from './pages/PlayToLearn/PlayToLearn';
import store from './stores/store';
=======
import RegistrationForm from './components/molecules/RegistrationForm/RegistrationForm';
>>>>>>> 4d864424322ef8130299d8a575daa7a659565a20

// import { Provider } from 'react-redux';
// import { store } from './stores';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Registration} />
            <Route path="/play_to_learn" component={PlayToLearn} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
=======
      {/* <Provider store={store}> */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={RegistrationForm} />
        </Switch>
      </Router>

      {/* </Provider> */}
>>>>>>> 4d864424322ef8130299d8a575daa7a659565a20
    </div>
  );
}

export default App;
