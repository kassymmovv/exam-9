import React, {Component} from 'react';
import {connect} from "react-redux";
import {addContact} from "../actions/actions";
import '../container/contacts.js.css'

class AddContactPage extends Component {
    state = {
      name:null,
      number:null,
      mail:null,
      photo:null
    };
    nameHandler = event => {
      this.setState({name:event.target.value})
    };
    numberHandler = event => {
        this.setState({number:event.target.value})

    };
    mailHandler = event => {
        this.setState({mail:event.target.value})
    };
    imgHandler = event => {
        this.setState({photo:event.target.value})
    };
    render() {
        return (
            <div className="addForm">
                <h1>ADD NEW PROFILE</h1>
                <p>name</p>
                <input type="text" onChange={this.nameHandler}/>
                <p>phone number</p>
                <input type="text" onChange={this.numberHandler}/>
                <p>mail</p>
                <input type="text" onChange={this.mailHandler}/>
                <p>img source</p>
                <input type="text" onChange={this.imgHandler}/>
                <button onClick={() => this.props.addContact(this.state)}>add contact</button>
                <button onClick={() => this.props.history.push('/')}>back</button>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    addContact:contact => dispatch(addContact(contact))
});
export default connect(null,mapDispatchToProps) (AddContactPage);