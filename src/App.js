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
        console.log(index);
        return MockBackend.getClientFavoriteVenues(index);
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
                    return row[filter.id] >= filter.value;
                }

            },
            {
                Header: '',
                Cell: (row) => (
                    <button onClick={() => {
                        MockBackend.removeClient(row.index);
                        let clients = this.state.clients;
                        clients.splice(row.index, 1)
                        this.setState({ clients });
                    }}>
                        Delete
                            </button>
                )
            },
            {
                Header: 'Favorite Venues',
                accessor: "id",
                Cell: (row) => {
                    return (
                        <ul>
                            {this.venues(row.original.id).map(venue => <li key={row.original.id}>{venue.name}</li>)}
                        </ul>
                    )
                }


            }
        ]
        return (
            <div>
                <div className="client-form">
                    <ClientForm addClient={this.addClient.bind(this)} />
                </div>
                <div className="venue-form">
                    <VenueForm addVenue={this.addVenue} />
                </div>

                <ReactTable
                    columns={columns}
                    data={this.state.clients} />


            </div>

        )
    }
}

export default App;
