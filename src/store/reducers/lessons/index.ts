import { INITIAL_STATE } from "./initialState";
import { ActionTypeEnum } from "./actions";

const lessons = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case ActionTypeEnum.ADD_LESSON: return { ...state, lessons: [ ...state.lessons, { name: "next lesson" } ] };
        case ActionTypeEnum.REMOVE_LESSON: return { ...state, lessons: state.lessons.splice(state.lessons.length - 1) };
        default: return state;
    }
}

export default lessons;