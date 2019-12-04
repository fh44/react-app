import React, { Component } from 'react';
import VenuesDropDown from './VenuesDropDown'
import MockBackend from './MockBackend';
import { Radio } from 'semantic-ui-react';

class VenuesClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: MockBackend.listClients(),
            idClientSelected: null,
            idFavoriteVenue: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSubmit = e => {
        e.preventDefault();
        //MockBackend.addFavoriteVenueToClient(this.state.idClientSelected, this.state.idFavoriteVenue);
        this.props.addFavoriteVenue(this.state.idClientSelected, this.state.idFavoriteVenue);
       
    }

    selectedVenue = (venue) => {
        this.setState({
            idFavoriteVenue: venue
        })
    }
    handleChange = (e, { value }) => this.setState({ idClientSelected: value })

    render() {
        return (
            <form id="add-venue-form" className="ui form" onSubmit={this.handleFormSubmit}>
                <h4 className="ui dividing header">Add Favorite Venue</h4>
                <div className="field">
                    <label>Venues</label>
                    <VenuesDropDown selectedVenue={this.selectedVenue}></VenuesDropDown>
                </div>

                <div>
                    {this.state.clients.map(client =>
                        <div>
                            <Radio
                                label={client.name}
                                name={client.name}
                                value={client.id}
                                checked={this.state.idClientSelected === client.id}
                                onChange={this.handleChange}>

                            </Radio>
                        </div>)}
                </div>

                <div>
                    <button type="submit" className="ui primary button">
                        Submit
                     </button>
                   
                </div>

            </form >
        )
    }
}

export default VenuesClientForm;