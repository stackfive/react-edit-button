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
| containerProps | object | No | undefined | Props applied to the container <div> element.
| editButtonProps | object | No | {} | Props applied to the edit button.
| editButtonProps.text | string | No | 'Edit' | Replace the edit button text.
| editButtonProps.icon | any | No | <svg> | Replace the default edit button icon with anything.
| editMode | boolean | No | undefined | Manually control edit mode.
| hideEditButton | boolean | No | undefined | Manually control showing and hiding the edit button. 
| hoverToShowEditButton | boolean | No | false | Will hide the edit button by default and show it on hover of the wrapped element.
| inputProps | object | No | {} | Props for the input element.
| inputProps.onChange | function | No | undefined | Function fired on input change.
| inputProps.placeholder | string | No | undefined | Input placeholder text.
| inputProps.value | string || number | No | undefined | Value shown in the input (can be different than displayed text in wrapped elelent)
| onAccept | function | Yes | undefined | Function that is fired when the accept button is clicked.
| onContainerClick | function | No | undefined | Function that is fired when the content container is clicked.
| onEditButtonClick | function | No | undefined | Function that fires when the edit button is clicked.
| onReject | function | No | undefined | Function that is fired when the reject button is clicked.

## License

MIT © [stackfive](https://github.com/stackfive)
