import React, { Component } from 'react';
import { ReactComponent as Search } from 'assets/search-solid.svg';
import classNames from 'classnames';

import * as styles from './styles.module.scss';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      isFocused: false,
    };
  }

  toggleFocus = () => this.setState({ isFocused: !this.state.isFocused });

  render() {
    const { isFocused } = this.state;

    return (
      <div className={classNames(styles.searchbarWrapper, isFocused && styles.focused)}>
        <div className={styles.searchbar}>
          {!isFocused && <Search onClick={this.toggleFocus} />}
          {isFocused && (
            <div className={styles.inputWrapper}>
              <input name="search" type="text" />
              <Search onClick={this.toggleFocus} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
