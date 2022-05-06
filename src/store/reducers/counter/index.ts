import { INITIAL_STATE } from "./initialState";
import { ActionTypeEnum } from "./actions";

const counter = (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case ActionTypeEnum.INCREMENT: return { ...state, counter: state.counter + 1 };
        case ActionTypeEnum.DECREMENT: return { ...state, counter: state.counter - 1 };
        default: return state;
    }
}

export default counter;