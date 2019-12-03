import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import MockBackend from './MockBackend'



const options = MockBackend.listVenues().map(obj => {
    var option = {};
    option.key = obj.id;
    option.text = obj.name;
    option.value = obj.name;
    option[obj.id] = obj.name;
    return option;
});


const VenuesDropDown = () => (
  <Dropdown placeholder='Favorite Venues' fluid multiple selection options={options} />
)

export default VenuesDropDown;