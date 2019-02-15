# react-edit-button

> A React component for making any html element&#x27;s text editable

[![NPM](https://img.shields.io/npm/v/react-edit-button.svg)](https://www.npmjs.com/package/react-edit-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-edit-button
```

## Usage

```jsx
import React, { Component } from 'react'

import EditButton from 'react-edit-button'

class Example extends Component {
  state = {
    text: 'edit me'
  }
  onAccept = (text) => {
    this.setState({ text })
  }
  onReject = (prevText) => {
    console.log(prevText)
  }
  render () {
    return (
      <EditButton onAccept={handleOnAccept} onReject={handleOnReject}>
        <span>{ this.state.text }</span>
      </EditButton>
    )
  }
}
```

## License

MIT © [stackfive](https://github.com/stackfive)
