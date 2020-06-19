import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ArrowDown } from 'assets/chevron-down-solid.svg';
import { ReactComponent as ArrowUp } from 'assets/chevron-up-solid.svg';
import classNames from 'classnames';
import { removeDescription } from 'store/Hint/description.slice';
import { setLowerFloor, setUpperFloor } from 'store/Map/floor.slice';

import * as styles from './styles.module.scss';

const mapStateToProps = state => ({
  currentFloor: state.map.floor.currentFloor,
});

const mapDispatchToProps = dispatch => ({
  setUpperFloor: () => dispatch(setUpperFloor()),
  setLowerFloor: () => dispatch(setLowerFloor()),
  removeDescription: () => dispatch(removeDescription()),
});

class FloorController extends Component {
  renderLabel = () => {
    const { currentFloor } = this.props;
    return currentFloor === 0 ? 'parter' : `${currentFloor} piętro`;
  };

  setUpperFloor = () => {
    const { setUpperFloor, removeDescription } = this.props;
    setUpperFloor();
    removeDescription();
  };

  setLowerFloor = () => {
    const { setLowerFloor, removeDescription } = this.props;
    setLowerFloor();
    removeDescription();
  };

  render() {
    const { currentFloor } = this.props;

    return (
      <section className={styles.arrowsSection}>
        <button className={classNames(styles.arrow, currentFloor === 9 && styles.hidden)} onClick={this.setUpperFloor}>
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

export default connect(mapStateToProps, mapDispatchToProps)(FloorController);
