import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import ArtistGameScreen from '../artist-game-screen/artist-game-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameScreen from '../game-screen/game-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import GenreGameScreen from '../genre-game-screen/genre-game-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import WinScreen from '../win-screen/win-screen';

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={({history}) => (
            <WelcomeScreen
              errorsCount={errorsCount}
              handlePlayBtnClick={() => history.push(`/game`)}
            />
          )}
        />
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
          <ArtistGameScreen
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path='/dev-genre'>
          <GenreGameScreen
            question={firstQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path='/game'>
          <GameScreen
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
