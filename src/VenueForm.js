import React, { Component } from 'react';

class VenueForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleAddVenue(e) {
        //e.preventDefault();
        let venue = Object();
        venue.name = this.state.name;
        this.props.addVenue(venue);
    }

    clearForm = () => {
        this.setState({
            name: ''
        })
    }
    render() {
        return (
            <form id="add-venue-form" className="ui form">
                <h4 className="ui dividing header">Add Venue</h4>
                <div className="field">
                    <label>Venue Name</label>
                    <input
                    type='text'
                    name="name" onChange={this.handleChange.bind(this)} value={this.state.name} placeholder="Venue Name"
                />
                </div>
                
                <div>
                    <button type="submit" className="ui primary button" onClick={this.handleAddVenue.bind(this)}>
                        Submit
              </button>
                    <button type="button" className="ui button" onClick={this.clearForm}>
                        Clear Values
            </button>
                </div>
            </form >
        )
    }
}

export default VenueForm;