import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import Keyboard from 'react-simple-keyboard';
import { ReactComponent as Search } from 'assets/search-solid.svg';
import classNames from 'classnames';
import { setDescription } from 'store/Hint/description.slice';
import { setPosition } from 'store/Hint/position.slice';
import { setFloor } from 'store/Map/floor.slice';

import { checkSelectedPos } from '../../helpers';
import mapLegend from '../Map/map_legend.json';

import 'react-simple-keyboard/build/css/index.css';
import './autosuggest.css';
import './keyboard.css';
import * as styles from './styles.module.scss';

const mapStateToProps = state => ({
  currentFloor: state.map.floor.currentFloor,
});

const mapDispatchToProps = dispatch => ({
  setPosition: pos => dispatch(setPosition(pos)),
  setDescription: desc => dispatch(setDescription(desc)),
  setFloor: floor => dispatch(setFloor(floor)),
});

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      isFocused: false,
      openKeyboard: false,
      searchValue: '',
      suggestions: [],
    };
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickedOutside);
  }

  prepareSuggestions = () => {
    const suggestions = Array.from(new Array(10).keys()).map((e, idx) => {
      return {
        floor: idx === 0 ? 'Parter' : `Piętro ${idx}`,
        rooms: mapLegend.map(ele => (ele.floor_id === `floor_${idx}` ? ele : null)).filter(e => e),
      };
    });

    return suggestions;
  };

  clickedOutside = event => {
    const keyboard = document.getElementById('keyboard_wrapper');
    const searchbar = document.getElementById('searchbar');
    const isClickedKeyboard = keyboard.contains(event.target);
    const isClickedSearchbar = searchbar.contains(event.target);

    if (!isClickedSearchbar && !isClickedKeyboard) {
      this.setState({ openKeyboard: false });
      document.removeEventListener('click', this.clickedOutside);
    }
  };

  toggleFocus = () => this.setState({ isFocused: !this.state.isFocused });

  handleKeyboardChange = value => {
    this.setState({ searchValue: value, suggestions: this.getSuggestions(value) });
  };

  onChange = (event, { newValue }) => {
    this.setState({
      searchValue: newValue,
    });
    this.keyboard.setInput(newValue);
  };

  handleOnFocus = () => {
    document.addEventListener('click', this.clickedOutside);
    this.setState({ openKeyboard: true, searchValue: '', suggestion: [] });
    this.keyboard.setInput('');
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = async (event, { suggestion }) => {
    const { id, floor_id } = suggestion;
    const { setPosition, setDescription, setFloor } = this.props;

    const floor_number = parseInt(floor_id.split('_').pop());
    await setFloor(floor_number);

    await setDescription(suggestion);

    const element = document.getElementById(id);
    const closestElement = element.closest('.room_block');
    checkSelectedPos(element, setPosition);
    closestElement.classList.add('active');
  };

  escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  getSuggestions = value => {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');
    const preparedSuggestions = this.prepareSuggestions();
    return preparedSuggestions
      .map(section => {
        return {
          floor: section.floor,
          rooms: section.rooms.filter(room => regex.test(room.name)),
        };
      })
      .filter(section => section.rooms.length > 0);
  };

  getSuggestionValue = suggestion => {
    return suggestion.name;
  };

  getSectionSuggestions = section => {
    return section.rooms;
  };

  getAutosuggestProps = () => {
    const { searchValue } = this.state;
    return {
      placeholder: 'Sala ...',
      value: searchValue,
      onChange: this.onChange,
      onFocus: this.handleOnFocus,
    };
  };

  renderSuggestion = suggestion => {
    return <span className={styles.suggestionName}>{`${suggestion.name} (${suggestion.category.toLowerCase()})`}</span>;
  };

  renderSectionTitle = section => {
    return <span className={styles.suggestionSection}>{section.floor}</span>;
  };

  render() {
    const { isFocused, openKeyboard, suggestions } = this.state;

    return (
      <React.Fragment>
        <div className={classNames(styles.searchbarWrapper, isFocused && styles.focused)}>
          <div id="searchbar" className={styles.searchbar}>
            {!isFocused && <Search onClick={this.toggleFocus} />}
            {isFocused && (
              <div className={styles.inputWrapper}>
                <Autosuggest
                  multiSection={true}
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  onSuggestionSelected={this.onSuggestionSelected}
                  getSuggestionValue={this.getSuggestionValue}
                  renderSuggestion={this.renderSuggestion}
                  renderSectionTitle={this.renderSectionTitle}
                  getSectionSuggestions={this.getSectionSuggestions}
                  inputProps={this.getAutosuggestProps()}
                />
                <Search onClick={this.toggleFocus} />
              </div>
            )}
          </div>
        </div>
        <div id="keyboard_wrapper" className={classNames(styles.keyboardWrapper, !openKeyboard && styles.hidden)}>
          <Keyboard
            keyboardRef={ref => (this.keyboard = ref)}
            inputName={'search'}
            className={styles.keyboard}
            preventMouseDownDefault
            stopMouseDownPropagation
            onChange={this.handleKeyboardChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
