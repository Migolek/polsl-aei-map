import React, { Component } from 'react';

import * as styles from './styles.module.scss';

export default class ShowOptions extends Component {
  render() {
    return (
      <section className={styles.showOptionsSection}>
        <span className={styles.title}>{'Wyświetlanie'}</span>
        <ul className={styles.optionsList}>
          <li>
            <input type="checkbox" name="rooms" />
            <span>{'Pokoje'}</span>
          </li>
          <li>
            <input type="checkbox" name="halls" />
            <span>{'Aule'}</span>
          </li>
          <li>
            <input type="checkbox" name="people" />
            <span>{'Osoby'}</span>
          </li>
          <li>
            <input type="checkbox" name="others" />
            <span>{'Inne'}</span>
          </li>
        </ul>
      </section>
    );
  }
}
