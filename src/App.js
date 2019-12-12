import React, { Component } from 'react';
import './App.css';
import MockBackend from './MockBackend';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import ClientForm from './ClientForm';
import VenueForm from './VenueForm';
import VenuesClientForm from './VenuesClientForm'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: MockBackend.listClients(),
            venues: MockBackend.listVenues()
        }
    }

    addClient = client => {
        MockBackend.addClient(client);
        let clients = MockBackend.listClients();
        this.setState({ clients });
    }

    addVenue = venue => {
        MockBackend.addVenue(venue);
        let venues = MockBackend.listVenues();
        this.setState({ venues })
    }

    favoriteVenues = index => {
        return MockBackend.getClientFavoriteVenues(index);
    }

    deleteClient = index => {
        let clients = MockBackend.removeClient(index);
        clients = MockBackend.listClients();
        this.setState({ clients });
    }

    addFavoriteVenue = (clientId, venueId) => {
        MockBackend.addFavoriteVenueToClient(clientId, venueId);
        let clients = MockBackend.listClients();
        this.setState({clients});
    }

    render() {
        const columns = [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "Name",
                accessor: "name"
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "Age",
                accessor: "age",
                filterable: true,
                filterMethod: (filter, row) => {
                    return parseInt(row[filter.id]) >= parseInt(filter.value);
                }

            },
            {
                Header: '',
                accessor: "id",
                Cell: (row) => (
                    <button className="ui negative basic button" onClick={() => this.deleteClient(row.original.id)}>
                        Delete
                    </button>
                )
            },
            {
                Header: 'Favorite Venues',
                accessor: "id",
                Cell: (row) => {
                    return (
                        <ul className="ui list">
                            {this.favoriteVenues(row.original.id).map(venue => <li key={row.original.id}>{venue.name}</li>)}
                        </ul>
                    )
                }


            }
        ]
        return (
            <div id="wrapper">
                <div id="first" className="client-form">
                    <ClientForm addClient={this.addClient.bind(this)} />
                </div>
                <div id="second" className="venue-form">
                    <VenueForm addVenue={this.addVenue} />
                </div>
                <div>
                    <VenuesClientForm addFavoriteVenue={this.addFavoriteVenue}></VenuesClientForm>
                </div>

                <ReactTable className="ui celled table"
                    columns={columns}
                    data={this.state.clients} />

            </div>

        )
    }
}

export default App;
