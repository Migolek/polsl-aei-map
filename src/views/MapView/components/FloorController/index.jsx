import React, { Component } from 'react';
import { ReactComponent as ArrowDown } from 'assets/chevron-down-solid.svg';
import { ReactComponent as ArrowUp } from 'assets/chevron-up-solid.svg';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import * as styles from './styles.module.scss';

export default class FloorController extends Component {
  static propTypes = {
    setFloor: PropTypes.func,
    currentFloor: PropTypes.number,
  };

  renderLabel = () => {
    const { currentFloor } = this.props;
    return currentFloor === 0 ? 'parter' : `${currentFloor} piętro`;
  };

  setHigherFloor = () => {
    const { setFloor, currentFloor } = this.props;

    return currentFloor + 1 > 9 ? setFloor(9) : setFloor(currentFloor + 1);
  };

  setLowerFloor = () => {
    const { setFloor, currentFloor } = this.props;

    return currentFloor - 1 < 0 ? setFloor(0) : setFloor(currentFloor - 1);
  };

  render() {
    const { currentFloor } = this.props;

    return (
      <section className={styles.arrowsSection}>
        <button className={classNames(styles.arrow, currentFloor === 9 && styles.hidden)} onClick={this.setHigherFloor}>
          <ArrowUp />
        </button>
        <span className={styles.label}>{this.renderLabel()}</span>
        <button className={classNames(styles.arrow, currentFloor === 0 && styles.hidden)} onClick={this.setLowerFloor}>
          <ArrowDown />
        </button>
      </section>
    );
  }
}
