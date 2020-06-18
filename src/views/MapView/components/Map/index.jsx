import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { setDescription } from 'store/Hint/description.slice';
import { setPosition } from 'store/Hint/position.slice';

import rooms from './map_legend.json';

import './map-style.css';
import * as styles from './styles.module.scss';

const mapStateToProps = state => ({
  currentFloor: state.map.floor.currentFloor,
});

const mapDispatchToProps = dispatch => ({
  setPosition: pos => dispatch(setPosition(pos)),
  setDescription: desc => dispatch(setDescription(desc)),
});

class Map extends Component {
  static mapConfig = [
    <Floor0 key="0" />,
    <Floor1 key="1" />,
    <Floor2 key="2" />,
    <Floor3 key="3" />,
    <Floor4 key="4" />,
    <Floor5 key="5" />,
    <Floor6 key="6" />,
    <Floor7 key="7" />,
    <Floor8 key="8" />,
    <Floor9 key="9" />,
  ];

  constructor() {
    super();

    this.refMap = React.createRef();
  }

  componentDidMount() {
    const { current: element } = this.refMap;
    element.addEventListener('click', this.handleClickMap);
  }

  componentWillUnmount() {
    const { current: element } = this.refMap;
    element.removeEventListener('click', this.handleClickMap);
  }

  handleClickMap = event => {
    const closestElement = event.target.closest('.room_block');
    const closestElementId = closestElement?.id;
    const roomDescription = rooms.find(ele => ele.id === closestElementId);
    if (closestElementId && roomDescription) {
      this.setHintPosition(closestElementId);
      this.setHintDescription(roomDescription);
    }
  };

  setHintPosition = id => {
    const roomElement = document.getElementById(id);
    this.checkSelectedPos(roomElement);
  };

  setHintDescription = description => {
    const { setDescription } = this.props;
    setDescription(description);
  };

  checkSelectedPos = roomEle => {
    const roomPos = roomEle.getBoundingClientRect();
    const hintPos = document.getElementById('map_hint').getBoundingClientRect();
    const { x, y } = roomPos;
    const { setPosition } = this.props;

    const STANDARD_POSITION = { x: x - (hintPos.width - roomPos.width) / 2, y: y - 160 };

    if (roomPos.left < 32 + hintPos.width) {
      setPosition({ x: x + roomPos.width + 16, y: STANDARD_POSITION.y });
    } else if (roomPos.top < 32 + hintPos.height) {
      setPosition({ x: STANDARD_POSITION.x, y: y + roomPos.height + 16 });
    } else if (roomPos.right < 32 + hintPos.width) {
      setPosition({ x: x - roomPos.width - 16, y: STANDARD_POSITION.y });
    } else if (roomPos.bottom < 32 + hintPos.height) {
      setPosition({ x: STANDARD_POSITION.x, y: y - roomPos.height - 16 });
    } else {
      setPosition(STANDARD_POSITION);
    }
  };

  renderMap = () => {
    const { currentFloor } = this.props;

    if (currentFloor >= 0 && currentFloor < 9) {
      return Map.mapConfig[currentFloor];
    } else return Map.mapConfig[0];
  };

  render() {
    return (
      <section ref={this.refMap} className={styles.mapSection}>
        {this.renderMap()}
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
