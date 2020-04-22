import React, { Component } from 'react';
import { ReactComponent as Floor0 } from 'assets/map-files/0_floor.svg';
import { ReactComponent as Floor1 } from 'assets/map-files/1_floor.svg';
import { ReactComponent as Floor2 } from 'assets/map-files/2_floor.svg';
import { ReactComponent as Floor3 } from 'assets/map-files/3_floor.svg';
import { ReactComponent as Floor4 } from 'assets/map-files/4_floor.svg';
import { ReactComponent as Floor5 } from 'assets/map-files/5_floor.svg';
import { ReactComponent as Floor6 } from 'assets/map-files/6_floor.svg';
import { ReactComponent as Floor7 } from 'assets/map-files/7_floor.svg';
import { ReactComponent as Floor8 } from 'assets/map-files/8_floor.svg';
import { ReactComponent as Floor9 } from 'assets/map-files/9_floor.svg';
import PropTypes from 'prop-types';

import * as styles from './styles.module.scss';

export default class Map extends Component {
  static propTypes = {
    currentFloor: PropTypes.number.isRequired,
  };

  static defaultProps = {
    currentFloor: 0,
  };

  static mapConfig = [Floor0, Floor1];

  renderMap = () => {
    const { currentFloor } = this.props;

    if (currentFloor >= 0 && currentFloor < 9) {
      return Map.mapConfig[currentFloor].svg;
    } else return Map.mapConfig[0].svg;
  };

  render() {
    return (
      <section className={styles.mapSection}>
        <Floor0 />
      </section>
    );
  }
}
