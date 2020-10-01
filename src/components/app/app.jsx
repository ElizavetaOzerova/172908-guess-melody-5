import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import ArtistGameScreen from '../artist-game-screen/artist-game-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import GenreGameScreen from '../genre-game-screen/genre-game-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import WinScreen from '../win-screen/win-screen';

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path='/login'>
          <AuthScreen />
        </Route>
        <Route exact path='/result'>
          <WinScreen />
        </Route>
        <Route exact path='/lose'>
          <GameOverScreen />
        </Route>
        <Route exact path='/dev-artist'>
          <ArtistGameScreen />
        </Route>
        <Route exact path='/dev-genre'>
          <GenreGameScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
