import React, {Component} from 'react';
import {editContact} from "../actions/actions";
import {connect} from "react-redux";
import '../container/contacts.js.css'
class EditPage extends Component {
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
            <div className="EditForm">
                <h1>EDIT YOUR PROFILE</h1>
                <p>name</p>
                <input type="text" placeholder='name' onChange={this.nameHandler}/>
                <p>phone number</p>
                <input type="text" placeholder="phone number" onChange={this.numberHandler}/>
                <p>mail</p>
                <input type="text" placeholder='mail' onChange={this.mailHandler}/>
                <p>img source</p>
                <input type="text" onChange={this.imgHandler}/>k
                <button onClick={() => this.props.editContact(this.props.match.params.id,this.state)}>save</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    editContact:(id,contact) => dispatch(editContact(id,contact))
});
export default connect(null,mapDispatchToProps) (EditPage);