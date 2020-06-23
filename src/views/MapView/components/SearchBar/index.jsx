import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import { ReactComponent as Search } from 'assets/search-solid.svg';
import classNames from 'classnames';

import 'react-simple-keyboard/build/css/index.css';
import './keyboard.css';
import * as styles from './styles.module.scss';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      isFocused: false,
      openKeyboard: false,
      searchValue: '',
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.clickedOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickedOutside);
  }

  clickedOutside = event => {
    const keyboard = document.getElementById('keyboard_wrapper');
    const isClickedKeyboard = keyboard.contains(event.target);
    const { openKeyboard } = this.state;

    if (openKeyboard && !isClickedKeyboard) {
      this.toggleKeyboard(false);
    }
  };

  toggleFocus = () => this.setState({ isFocused: !this.state.isFocused });

  onChange = value => this.setState({ searchValue: value });

  handleChange = event => this.setState({ searchValue: event.target.value });

  toggleKeyboard = booleanValue => this.setState({ openKeyboard: booleanValue });

  render() {
    const { isFocused, openKeyboard, searchValue } = this.state;

    return (
      <React.Fragment>
        <div className={classNames(styles.searchbarWrapper, isFocused && styles.focused)}>
          <div className={styles.searchbar}>
            {!isFocused && <Search onClick={this.toggleFocus} />}
            {isFocused && (
              <div className={styles.inputWrapper}>
                <input
                  name="search"
                  type="text"
                  value={searchValue}
                  onFocus={() => this.toggleKeyboard(true)}
                  onChange={this.handleChange}
                />
                <Search onClick={this.toggleFocus} />
              </div>
            )}
          </div>
        </div>
        <div id="keyboard_wrapper" className={classNames(styles.keyboardWrapper, !openKeyboard && styles.hidden)}>
          <Keyboard inputName={'search'} className={styles.keyboard} onChange={this.onChange} />
        </div>
      </React.Fragment>
    );
  }
}
