import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import Keyboard from 'react-simple-keyboard';
import { ReactComponent as Search } from 'assets/search-solid.svg';
import classNames from 'classnames';

import mapLegend from '../Map/map_legend.json';

import 'react-simple-keyboard/build/css/index.css';
import './keyboard.css';
import * as styles from './styles.module.scss';

export default class SearchBar extends Component {
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

  onChange = (event, { newValue, method }) => {
    this.setState({
      searchValue: newValue,
    });
    this.keyboard.setInput(newValue);
  };

  handleOnFocus = () => {
    document.addEventListener('click', this.clickedOutside);
    this.setState({ openKeyboard: true });
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

  renderSuggestion = suggestion => {
    return <span>{`${suggestion.name} | ${suggestion.floor}`}</span>;
  };

  renderSectionTitle = section => {
    return <strong>{section.floor}</strong>;
  };

  getAutosuggestProps = () => {
    const { searchValue } = this.state;
    return {
      placeholder: 'Wpisz frazę',
      value: searchValue,
      onChange: this.onChange,
      onFocus: this.handleOnFocus,
    };
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
                  getSuggestionValue={this.getSuggestionValue}
                  renderSuggestion={this.renderSuggestion}
                  renderSectionTitle={this.renderSectionTitle}
                  getSectionSuggestions={this.getSectionSuggestions}
                  alwaysRenderSuggestions
                  inputProps={this.getAutosuggestProps()}
                  className={styles.autosuggestComponent}
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
