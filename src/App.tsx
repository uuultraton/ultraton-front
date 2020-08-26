import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/organisms/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import LogIn from './pages/LogIn/LogIn';
import PlayToLearn from './pages/PlayToLearn/PlayToLearn';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import store from './stores/store';
import Registration from './pages/Registration/Registration';
import SkillsModalWindow from './components/organisms/SkillsModal/SkillsModalWindow';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Registration} />
            <Route path="/play_to_learn" component={PlayToLearn} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/modal" component={SkillsModalWindow} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
