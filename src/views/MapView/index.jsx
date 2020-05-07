import React from 'react';

import PolslLogo from '../../assets/polsl-logo.png';

import FloorController from './components/FloorController';
import HintTile from './components/HintTile';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import ShowOptions from './components/ShowOptions';

import * as styles from './styles.module.scss';

class MapView extends React.Component {
  constructor() {
    super();

    this.state = {
      currentFloor: 0,
      hintPosition: {
        x: null,
        y: null,
      },
    };
  }

  setFloor = floorNumber => this.setState({ currentFloor: floorNumber });

  setHintPosition = position => this.setState({ hintPosition: position });

  render() {
    const { currentFloor, hintPosition } = this.state;

    return (
      <section className={styles.mapViewSection}>
        <div className={styles.headerWrapper}>
          <img src={PolslLogo} alt="polsl-logo" />
          <div className={styles.serachbarWrapper}>
            <SearchBar />
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.mapWrapper}>
            <Map currentFloor={currentFloor} setHintPosition={this.setHintPosition} />
          </div>
          <div className={styles.sidebarWrapper}>
            <FloorController setFloor={this.setFloor} currentFloor={currentFloor} />
            <ShowOptions />
          </div>
        </div>
        <HintTile position={hintPosition} />
      </section>
    );
  }
}

export default MapView;
