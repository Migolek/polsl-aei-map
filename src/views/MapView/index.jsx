import React from 'react';
import { ReactComponent as Search } from 'assets/search-solid.svg';

import PolslLogo from '../../assets/polsl-logo.png';

import FloorController from './components/FloorController';
import Map from './components/Map';
import ShowOptions from './components/ShowOptions';

import * as styles from './styles.module.scss';

class MapView extends React.Component {
  render() {
    return (
      <section className={styles.mapViewSection}>
        <div className={styles.headerWrapper}>
          <img src={PolslLogo} alt="polsl-logo" />
          <div className={styles.serachbarWrapper}>
            <div className={styles.searchbar}>
              <Search />
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.mapWrapper}>
            <Map currentFloor={0} />
          </div>
          <div className={styles.sidebarWrapper}>
            <FloorController />
            <ShowOptions />
          </div>
        </div>
      </section>
    );
  }
}

export default MapView;
