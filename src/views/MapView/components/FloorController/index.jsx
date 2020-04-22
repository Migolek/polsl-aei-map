import React, { Component } from 'react';
import { ReactComponent as ArrowDown } from 'assets/chevron-down-solid.svg';
import { ReactComponent as ArrowUp } from 'assets/chevron-up-solid.svg';

import * as styles from './styles.module.scss';

export default class FloorController extends Component {
  render() {
    return (
      <section className={styles.arrowsSection}>
        <div className={styles.arrow}>
          <ArrowUp />
        </div>
        <span className={styles.label}>{'parter'}</span>
        <div className={styles.arrow}>
          <ArrowDown />
        </div>
      </section>
    );
  }
}
