export enum ActionTypeEnum {
    INCREMENT = 'increment',
    DECREMENT = 'decrement'
};

export const actions = {
    increment: () => ({ type: ActionTypeEnum.INCREMENT }),
    decrement: () => ({ type: ActionTypeEnum.DECREMENT })
};