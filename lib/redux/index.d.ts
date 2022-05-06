export interface ActionInterface {
    type: string
}
export interface StateInterface {
    getState: () => any,
    dispatch: ( action: ActionInterface ) => void
}
export type ReducerType = ( state: StateInterface, action: ActionInterface, ) => StateInterface
export type Store = ( reducer: ReducerType ) => StateInterface