import React, { Component } from 'react';
import './App.css';
import MockBackend from './MockBackend';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import ClientForm from './ClientForm';
import VenueForm from './VenueForm';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: MockBackend.listClients()
        }
    }

    addClient = client => {
        MockBackend.addClient(client);
        let clients = this.state.clients;
        this.setState({ clients });
    }

    addVenue = venue => {
        MockBackend.addVenue(venue);
    }

    venues = index => {
        return MockBackend.getClientFavoriteVenues(index);
    }

    deleteClient = (index) => {
        let clients = MockBackend.removeClient(index);
        clients = MockBackend.listClients();
        clients.splice(index, 1)
        this.setState({ clients });
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
                Cell: (row) => (
                    <button className="ui negative basic button" onClick={this.deleteClient}>
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
                            {this.venues(row.original.id).map(venue => <li key={row.original.id}>{venue.name}</li>)}
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

                <ReactTable className="ui celled table"
                    columns={columns}
                    data={this.state.clients} />


            </div>

        )
    }
}

export default App;
