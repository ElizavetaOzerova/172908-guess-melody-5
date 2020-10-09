import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {GameType} from '../../const';

import ArtistGameScreen from '../artist-game-screen/artist-game-screen';
import GenreGameScreen from '../genre-game-screen/genre-game-screen';

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step >= questions.length || !questions) {
      return (
        <Redirect to="/" />
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <ArtistGameScreen
            onAnswer={() => {
              this.setState((state) => ({
                step: state.step + 1,
              }));
            }}
            question={question}
          />);
      case GameType.GENRE:
        return (
          <GenreGameScreen
            onAnswer={() => {
              this.setState((state) => ({
                step: state.step + 1,
              }));
            }}
            question={question}
          />);
    }

    return <Redirect to="/" />;
  }
}

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default GameScreen;
