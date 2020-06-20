import React from 'react';
import { Link } from 'react-router-dom';

import PolslLogo from '../../assets/polsl-logo.png';

import FloorController from './components/FloorController';
import HintTile from './components/HintTile';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import ShowOptions from './components/ShowOptions';

import * as styles from './styles.module.scss';

class MapView extends React.Component {
  render() {
    return (
      <section className={styles.mapViewSection}>
        <div className={styles.headerWrapper}>
          <Link className={styles.linkWrapper} to="/">
            <img src={PolslLogo} alt="polsl-logo" />
          </Link>
          <div className={styles.searchbarWrapper}>
            <SearchBar />
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.mapWrapper}>
            <Map />
          </div>
          <div className={styles.sidebarWrapper}>
            <FloorController />
            <ShowOptions />
          </div>
        </div>
        <HintTile />
      </section>
    );
  }
}

export default MapView;
