const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `indi-rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `indi-rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `techno`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `classical music`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `punk`,
    }]
  }, {
    type: `artist`,
    song: {
      artist: `Muse`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      artist: `Maroon 5`,
      picture: `${AVATAR_URL}/${Math.random()}`,
    }, {
      artist: `Royal Blood`,
      picture: `${AVATAR_URL}/${Math.random()}`,
    }, {
      artist: `Hans Zimmer`,
      picture: `${AVATAR_URL}/${Math.random()}`,
    }]
  },
];

