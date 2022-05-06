import { combineReducers } from "../../../lib/redux";
import counter from "./counter";
import lessons from "./lessons";

const rootReducer = combineReducers({
    counter,
    lessons
})

export default rootReducer;