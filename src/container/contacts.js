import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {deleteContact, fetchContacts} from "../actions/actions";
import './contacts.js.css'
import Modal from "../Modal/Modal";
class Contacts extends Component {
    state = {
        modal:false,
        id:null,
        key:null
    };
    componentDidMount() {
        this.props.renderContact()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.contact === prevState){
            this.props.renderContact()
        }
    }

    purchase =() => {
        this.setState({modal:true})
    };
    purchaseHandler = () => {
        this.setState({modal:false})
    };

    render() {

        return (
            <div>
                <NavLink className="Navlink" to="/add">add new contact</NavLink>
                {this.props.contact && Object.keys(this.props.contact).map(res => {

                        return(
                                <div className="Main" key={res} onClick={() => {return(
                                    this.purchase(),
                                    this.setState({id:this.props.contact[res],key:res})
                                )}}>
                                    <img className="img" src={this.props.contact[res].photo} alt="#"/>
                                    <div>{this.props.contact[res].name}</div>

                                </div>
                            )


                })}
                <Modal show={this.state.modal}
                       close={this.purchaseHandler}
                >
                    {this.state.id !== null ?
                        <div>
                            <img src={this.state.id.photo} alt=""/>
                            <div>name:{this.state.id.name}</div>
                            <div>phone number:{this.state.id.number}</div>
                            <div>mail:{this.state.id.mail}</div>
                            <NavLink to={`/edit${this.state.key}`}>edit</NavLink>
                            <button onClick={() => {(this.props.deleteContact(this.state.key))}}>delete</button>
                        </div>:<div>loading</div>}
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    contact:state.contact
});
const mapDispatchToProps = dispatch => ({
    renderContact:() => dispatch(fetchContacts()),
    deleteContact:id => dispatch(deleteContact(id))
});
export default connect(mapStateToProps,mapDispatchToProps) (Contacts);