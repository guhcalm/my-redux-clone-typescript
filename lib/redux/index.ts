import { Store } from "./index.d";

const actionRedux =  { type: '@@redux_setting_up' }

export const createStore: Store  = ( reducer ) => {
    let state = reducer( undefined, actionRedux );
    return {
        getState: () => state,
        dispatch ( action ) { state = reducer( state, action ) }
    };
};

export const combineReducers = ( reducers ) => {
    return ( state = {}, action ) => {
        let nextState = {};
        for ( const reducer in reducers ) {
            nextState[ reducer ] = reducers[ reducer ](state[ reducer ], action)
        }
        return nextState;
    }
};