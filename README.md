# react-edit-button

> A React wrapper component for making any html element&#x27;s text editable

[![NPM](https://img.shields.io/npm/v/react-edit-button.svg)](https://www.npmjs.com/package/react-edit-button) 
[![Build Status](https://travis-ci.com/alioguzhan/react-editext.svg?branch=master)](https://travis-ci.com/alioguzhan/react-editext) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) 
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT) 

![Example animation gif](http://stackfive.io/react-edit-button-example.gif)

## Install

```bash
npm install --save react-edit-button
```
or
```bash
yarn add react-edit-button
```

## Usage
The basic usage of React Edit Button only requires two props - an `onAccept` function and an html element child that has text as it's child.

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
  render () {
    return (
      <EditButton onAccept={handleOnAccept}>
        <span>{ this.state.text }</span>
      </EditButton>
    )
  }
}
```

## Props
| Prop | Type | Required | Default | Note
|---|---|---|---|---|
| onAccept | function | Yes | undefined | N/A
| onReject | function | No | undefined | N/A
| containerProps | object | No | undefined | N/A
| inputProps | object | No | {} | N/A
| inputProps.value | string || number | No | undefined | N/A
| inputProps.placeholder | string | No | undefined | N/A
| inputProps.onChange | function | No | undefined | N/A
| editButtonProps | object | No | {} | N/A
| editButtonProps.text | string | No | undefined | N/A
| editButtonProps.icon | any | No | undefined | N/A
| onEditButtonClick | function | No | undefined | N/A
| onContainerClick | function | No | undefined | N/A
| hideEditButton | boolean | No | undefined | N/A
| editMode | boolean | No | undefined | N/A

## License

MIT © [stackfive](https://github.com/stackfive)
