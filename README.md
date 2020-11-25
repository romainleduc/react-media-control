## react-media-control ##

Media controller built using [React](https://reactjs.org/) and [Material-UI](https://material-ui.com/) libraries.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/romainleduc/react-media-control/blob/master/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/react-media-control/latest.svg)](https://www.npmjs.com/package/react-media-control)

## Installation

React-media-control is available as an [npm package](https://www.npmjs.com/package/react-media-control). You can install it using:

```sh
npm install react-media-control

#or
yarn add react-media-control
```

Please note that depends on `@material-ui/core` which must also be installed.

## Usage

Here is a quick example to get you started.

```jsx
import React, { useState, useEffect, createRef } from 'react';
import {
  MediaControl,
  PlayPauseButton
  MuteUnmuteButton,
} from 'react-media-control';

const Example = () => {
  const [audio, setAudio] = useState();
  const audioRef = createRef();

  useEffect(() => {
    setAudio(audioRef.current);
  }, [audioRef]);

  return (
    <div>
      <audio
        ref={audioRef}
        src='/Jasmin.mp3'
      />
      <MediaControl media={audio}>
        <PlayPauseButton />
        <MuteUnmuteButton />
      </MediaControl>
    </div>
  );
}
```