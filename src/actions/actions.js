import  axios from 'axios';
export const SUCCESS = 'SUCCESS';

export const success = contact => {
    return{type:SUCCESS,contact}
};

export const fetchContacts =  () => {
    return dispatch =>{


        axios.get('https://ayan-contacts.firebaseio.com/contacts.json').then(response => {
            dispatch(success(response.data));
        },error => {
            dispatch.error(error)
        })

    }
};
export const addContact = contact => {
    return dispatch => {

        axios.post('https://ayan-contacts.firebaseio.com/contacts.json',contact);
        dispatch(fetchContacts())
    }
};
export const editContact = (id,contact) => {
    return dispatch => {
        axios.patch(`https://ayan-contacts.firebaseio.com/contacts/${id}.json`,contact);
        dispatch(fetchContacts())
    }
};

export const deleteContact = id => {
    return async dispatch => {
       await axios.delete(`https://ayan-contacts.firebaseio.com/contacts/${id}.json`);
        dispatch(fetchContacts())
    }
};