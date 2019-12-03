import React, { Component } from 'react';

class ClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            age: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleAddClient(e) {
        e.preventDefault();
        let client = Object();
        client.firstName = this.state.firstName;
        client.lastName = this.state.lastName;
        client.age = this.state.age;
        client.email = this.state.email;
        client.name = this.state.firstName.toLowerCase();
        this.props.addClient(client);
    }

    clearForm = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            age: ''
        })
    }


    render() {
        return (
            <form id="add-client-form">
                <div>
                    <label>First Name</label>
                </div>
                <input
                    type='text'
                    name="firstName" onChange={this.handleChange.bind(this)} value={this.state.firstName}
                />
                <div>
                    <label>Last Name</label>
                </div>
                <input type="text" name="lastName" onChange={this.handleChange.bind(this)} value={this.state.lastName} />

                <div>
                    <label>Age</label>
                </div>
                <input type="number" name="age" onChange={this.handleChange.bind(this)} value={this.state.age} />
                <div>
                    <label>Email</label>
                </div>
                <input type="text" name="email" onChange={this.handleChange.bind(this)} value={this.state.email} />
                <div>
                    <button type="submit" onClick={this.handleAddClient.bind(this)}>
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

export default ClientForm;