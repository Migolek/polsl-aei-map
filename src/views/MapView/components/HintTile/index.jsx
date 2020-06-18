import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import * as styles from './styles.module.scss';

const mapStateToProps = state => ({
  position: state.hint.position,
  description: state.hint.description.info,
});

class HintTile extends Component {
  setPosition = () => {
    const { x, y } = this.props.position;
    return {
      top: y,
      left: x,
    };
  };

  render() {
    const { description } = this.props;

    return (
      <section
        id="map_hint"
        className={classNames(styles.hintTileSection, !description.name && styles.hidden)}
        style={this.setPosition()}>
        <div className={styles.contentWrapper}>
          <span className={styles.name}>{description.name}</span>
          <span className={styles.category}>{description.category}</span>
          <span className={styles.floorName}>{description.floor}</span>
          <span className={styles.openingHours}>{description.openingHours}</span>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, null)(HintTile);
