import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';

export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.audioRef = React.createRef();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this.audioRef.current;
    audio.src = src;

    audio.oncanplaythrough = () => (
      this.setState({
        isLoading: false,
      })
    );
  }

  componentWillUnmount() {
    const audio = this.audioRef.current;
    audio.oncanplaythrough = null;
  }

  render() {
    const {onPlayButtonClick, isPlaying} = this.props;
    const {isLoading} = this.state;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          disabled={isLoading}
          onClick={onPlayButtonClick}
          type="button"
        />

        <div className="track__status">
          <audio
            autoPlay={isPlaying}
            ref={this.audioRef} />
        </div>
      </>
    );
  }

  componentDidUpdate() {
    const audio = this.audioRef.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

