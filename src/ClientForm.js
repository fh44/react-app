import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

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

    handleSubmit = (e) => {
        ('.ui.form')
        .form({
            fields: {
            firstName     : 'empty',
            lastName   : 'empty',
            email : 'empty',
            age : 'empy'
            }
        });
        this.handleAddClient.bind(this);
        e.preventDefault()
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
            <form id="add-client-form" className="ui form" onSubmit={this.handleSubmit}>
                <h4 className="ui dividing header">Add Client</h4>

                <div className="field">
                    <label>First Name</label>
                    <input required
                    type='text'
                    name="firstName" onChange={this.handleChange.bind(this)} value={this.state.firstName} placeholder="First Name"/>
                </div>
               
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" required name="lastName" onChange={this.handleChange.bind(this)} value={this.state.lastName} placeholder="Last Name"/>
                </div>
               
                <div className="field">
                    <label>Age</label>
                    <input type="number" required name="age" onChange={this.handleChange.bind(this)} value={this.state.age} placeholder="Age"/>
                </div>
               
                <div className="field">
                    <label>Email</label>
                    <input type="text" required name="email" onChange={this.handleChange.bind(this)} value={this.state.email} placeholder="Email" />
                </div>
                
                <div>
                    <button className="ui primary button" type="submit">
                        Submit
                    </button>
                    
                    <button className="ui button" type="button" onClick={this.clearForm}>
                    Clear Values
                    </button>
                </div>
            </form >
        )
    }
}

export default ClientForm;