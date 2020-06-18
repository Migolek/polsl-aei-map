import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as styles from './styles.module.scss';

const mapStateToProps = state => ({
  position: state.hint.position,
});

class HintTile extends Component {
  static propTypes = {
    position: PropTypes.object,
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {
      name: '',
      category: '',
      floorName: '',
      openingHours: '',
      administrator: null,
    },
  };

  setPosition = () => {
    const { x, y } = this.props.position;
    return {
      top: y,
      left: x,
    };
  };

  render() {
    return (
      <section id="map_hint" className={styles.hintTileSection} style={this.setPosition()}>
        <div className={styles.contentWrapper}>
          <span className={styles.name}>{'Buffet'}</span>
          <span className={styles.category}>{'(Inne)'}</span>
          <span className={styles.floorName}>{'Parter'}</span>
          <span className={styles.openingHours}>{'7:00 - 18:00'}</span>
        </div>
        {/* <div className={styles.arrow}>
          <img src={ArrowDown} alt="arrow-down" />
        </div> */}
      </section>
    );
  }
}

export default connect(mapStateToProps, null)(HintTile);
