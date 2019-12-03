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
        e.preventDefault();
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
            <form id="add-venue-form">
                <div>
                    <label>Venue Name</label>
                </div>
                <input
                    type='text'
                    name="name" onChange={this.handleChange.bind(this)} value={this.state.name}
                />
                <div>
                    <button type="submit" onClick={this.handleAddVenue.bind(this)}>
                        Submit
              </button>
                    <button type="button" onClick={this.clearForm}>
                        Clear Values
            </button>
                </div>
            </form >
        )
    }
}

export default VenueForm;