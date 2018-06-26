import * as actionTypes from '../actions/actionTypes';
import {updateOjbect} from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
        return updateOjbect(state, {counter: state.counter + 1});
        case actionTypes.DECREMENT:
        return updateOjbect(state, {counter: state.counter - 1});
        case actionTypes.ADD:
        return updateOjbect(state, {counter: state.counter + action.val});
        case actionTypes.SUBTRACT:
            return updateOjbect(state, {counter: state.counter - action.val});
            // return {
            //     ...state,
            //     counter: state.counter - action.val
            // };
        
    }
    
    return state;
}

export default reducer;