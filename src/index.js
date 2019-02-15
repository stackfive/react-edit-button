import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class EditButton extends Component {
  static defaultProps = {
    inputProps: {},
    editButtonProps: {},
  }
  static propTypes = {
    children: PropTypes.shape({
      props: PropTypes.shape({
        children: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    containerProps: PropTypes.any,
    inputProps: PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      placeholder: PropTypes.string,
      onChange: (props, propName, componentName) => {
        if ((typeof(props['value']) !== 'undefined' && (props[propName] == undefined || typeof(props[propName]) != 'function'))) {
          return new Error('Please provide an inputProps.onChange function');
        }
      },
    }),
    editButtonProps: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.any,
    }),
    onEditButtonClick: (props, propName, componentName) => {
      if (props['hideEditButton'] === true) {
        return false;
      } else if ((typeof(props['editMode']) === 'boolean' && (
        (props[propName] == undefined || typeof(props[propName]) != 'function') &&
        (props['onContainerClick'] == undefined || typeof(props['onContainerClick']) != 'function')
      ))) {
        return new Error('Please provide an onEditButtonClick or onContainerClick function');
      }
    },
    onContainerClick: (props, propName, componentName) => {
      if (typeof(props['editMode']) === 'boolean' && (props['hideEditButton'] === true) && (
        (props[propName] == undefined || typeof(props[propName]) != 'function')
      )) {
        return new Error('Please provide an onContainerClick function');
      } else if ((typeof(props['editMode']) === 'boolean' && (
        (props[propName] == undefined || typeof(props[propName]) != 'function') &&
        (props['onEditButtonClick'] == undefined || typeof(props['onEditButtonClick']) != 'function')
      ))) {
        return new Error('Please provide an onEditButtonClick or onContainerClick function');
      }
    },
    hideEditButton: PropTypes.bool,
    editMode: PropTypes.bool,
    onAccept: PropTypes.func.isRequired,
    onReject: PropTypes.func.isRequired,
  }

  state = {
    editMode: false,
    inputValue: this.props.children.props.children,
    prevInputValue: this.props.children.props.children,
  }

  handleEditButtonClick = () => {
    console.log('handleEditButtonClick');
    if (this.props.onEditButtonClick && typeof(this.props.editMode) === 'boolean') {
      this.props.onEditButtonClick();
      this.input.focus()
    } else {
      this.setState({ editMode: true }, () => {
        this.input.focus()
      })
    }
  }
  handleOnContainerClick = () => {
    console.log('handleOnContainerClick');
    if (this.props.onContainerClick && typeof(this.props.editMode) === 'boolean') {
      this.props.onContainerClick();
      this.input.focus()
    } else {
      console.log("Function for 'OnContainerClick' not provided");
      this.setState({ editMode: true }, () => {
        this.input.focus()        
      })
    }
  }
  handleOnKeyPress = (e) => {
    console.log('handleOnKeyPress');
    if (e.key === 'Enter') {
      this.onAccept(e)
    } 
  }
  handleOnKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.onReject(e)
    }
  }
  onAccept = () => {
    const inputValue = typeof(this.props.inputProps['value']) !== 'undefined' ? this.props.inputProps.value : this.state.inputValue;
    console.log('onAccept', inputValue)
    this.props.onAccept(inputValue)
    this.setState({
      editMode: false,
      prevInputValue: this.state.inputValue,
    })
  }
  onReject = () => {
    console.log('onReject', this.state.prevInputValue);
    this.props.onReject(this.state.prevInputValue);
    this.setState({
      editMode: false,
      inputValue: this.state.prevInputValue,
    })
  }
  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }
  render() {
    const {
      handleEditButtonClick,
      handleOnContainerClick,
      handleOnKeyPress,
      handleOnKeyDown,
      onAccept,
      onReject,
    } = this;

    const {
      containerProps,
      inputProps,
      editButtonProps,
      children,
      hideEditButton,
    } = this.props;

    const {
      placeholder,
    } = inputProps;

    const inputValue = typeof(inputProps['value']) !== 'undefined' ? inputProps.value : this.state.inputValue;
    const onInputChange = typeof(inputProps['onChange']) !== 'undefined' ? inputProps.onChange : this.handleInputChange;

    const {
      text,
      icon,
    } = editButtonProps;

    const editMode = typeof(this.props.editMode) === 'undefined' ? this.state.editMode : this.props.editMode;

    const inputClasses = [styles.input];
    if (!editMode) inputClasses.push(styles.hidden);

    return (
      <div className={['EditButton', styles.container].join(' ')} {...containerProps}>
        <input
          value={inputValue}
          placeholder={placeholder}
          onChange={onInputChange}
          className={inputClasses.join(' ')}
          onKeyPress={handleOnKeyPress}
          onKeyDown={handleOnKeyDown}
          ref={(input) => this.input = input}
        />
        {
          editMode && (
            <Fragment>
              
              <button className={styles.acceptButton} onClick={onAccept}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
              </button>
              <button className={styles.rejectButton} onClick={onReject}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
              </button>
            </Fragment>
          )
        }
        {
          !editMode && (
            <Fragment>
              <div onClick={!editMode ? handleOnContainerClick : null}>
                { children }
              </div>
              {
                !hideEditButton && (
                  <button
                    onClick={handleEditButtonClick}
                    className={styles.editButton}
                  >
                    { text || 'Edit' } 
                    { 
                      icon || (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      )
                    }
                  </button>
                )
              }
            </Fragment>
          )
        }
      </div>
    )
  }
}
