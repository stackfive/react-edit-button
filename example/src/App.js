import React, { Component } from 'react'

import EditButton from 'react-edit-button'

export default class App extends Component {
  state = {
    text: 'Hello',
    editMode: false,
  }
  onInputChange = (e) => {
    this.setState({ text: e.target.value })
  }
  handleEditButtonClick = () => {
    this.setState({ editMode: true })
  }
  handleOnContainerClick = () => {
    console.log('app element click')
    this.setState({ editMode: true })
  }
  onAccept = (text) => {
    console.log('app onAccept', text)
    this.setState({ text, editMode: false })
  }
  onReject = (text) => {
    console.log('do nothing')
    this.setState({ text, editMode: false })
  }
  render () {
    const EditButtonProps = {
      // inputProps = {
      //   value: this.state.text,
      //   placeholder: 'Enter text',
      //   onChange: this.handleInputChange,
      // },
      // editButtonProps = {
      //   text: 'Edit',
      //   icon: undefined,
      // },
      // containerProps = {
      //   // any properties you want to add to the container div element
      // },
      // onContainerClick: this.handleOnContainerClick,
      // onEditButtonClick: this.handleEditButtonClick,
      // hideEditButton: true,
      // editMode: this.state.editMode,
      onAccept: this.onAccept,
      // onReject: this.onReject,
      hoverToShowEditButton: true,
    }
    return (
      <div style={{ padding: '2em' }}>
        <EditButton { ...EditButtonProps }>
          <span>{ this.state.text }</span>
        </EditButton>
      </div>
    )
  }
}
