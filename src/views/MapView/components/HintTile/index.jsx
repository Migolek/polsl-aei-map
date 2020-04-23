import React, { Component } from 'react';

import * as styles from './styles.module.scss';

export default class HintTile extends Component {
  render() {
    return (
      <section className={styles.hintTileSection}>
        <div className={styles.contentWrapper}>
          <span className={styles.name}>{'Buffet'}</span>
          <span className={styles.category}>{'(Inne)'}</span>
          <span className={styles.floorName}>{'Parter'}</span>
          <span className={styles.openingHours}>{'7:00 - 18:00'}</span>
        </div>
        <div className={styles.arrow}></div>
      </section>
    );
  }
}
