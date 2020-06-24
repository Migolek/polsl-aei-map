import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSelectedOptions } from 'store/Map/options.slice';

import * as styles from './styles.module.scss';

const mapDispatchToProps = dispatch => ({
  updateSelectedOptions: options => dispatch(updateSelectedOptions(options)),
});

class ShowOptions extends Component {
  constructor() {
    super();

    this.state = {
      options: [
        {
          name: 'rooms',
          label: 'Pokoje',
          checked: true,
        },
        {
          name: 'halls',
          label: 'Aule',
          checked: true,
        },
        {
          name: 'others',
          label: 'Inne',
          checked: true,
        },
      ],
    };
  }

  handleChange = (event, element) => {
    const isChecked = event.target.checked;
    const { options } = this.state;
    const { updateSelectedOptions } = this.props;

    const newArray = options.map(e => {
      if (e.name === element.name) {
        return { ...element, checked: isChecked };
      }
      return e;
    });
    this.setState({ options: newArray });
    updateSelectedOptions(newArray.filter(e => e.checked).map(e => e.label));
  };

  renderOptions = () => {
    const { options } = this.state;
    return options.map((ele, idx) => (
      <li key={idx}>
        <input type="checkbox" name={ele.name} checked={ele.checked} onChange={e => this.handleChange(e, ele)} />
        <span>{ele.label}</span>
      </li>
    ));
  };

  render() {
    return (
      <section className={styles.showOptionsSection}>
        <span className={styles.title}>{'Wyświetlanie'}</span>
        <ul className={styles.optionsList}>{this.renderOptions()}</ul>
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(ShowOptions);
