import React, { Component } from 'react';
import { ReactComponent as Search } from 'assets/search-solid.svg';

import * as styles from './styles.module.scss';

export default class SearchBar extends Component {
  render() {
    return (
      <div className={styles.searchbar}>
        <Search />
      </div>
    );
  }
}
