import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import MockBackend from './MockBackend'

class VenuesDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: MockBackend.listVenues()
    }
  }

  handleChange = (e, data) => {
    const { value } = data;
    const { key } = data.options.find(o => o.value === value);
    this.props.selectedVenue(key);
  }

  render() {
    const options = MockBackend.listVenues().map(obj => {
      var option = {};
      option.key = obj.id;
      option.text = obj.name;
      option.value = obj.name;

      return option;
    });
    return (

      <Dropdown placeholder='Favorite Venues' onChange={this.handleChange.bind(this)} fluid selection options={options}>
      </Dropdown>
    )


  }
}



export default VenuesDropDown;