import {SUCCESS} from "../actions/actions";

const initialState = {
    contact:null,
    cont:null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SUCCESS:
            return {
                ...state, contact: action.contact};

        default:
            return state;
    }
};

export default reducer;