export enum ActionTypeEnum {
    ADD_LESSON = 'ADD_LESSON',
    REMOVE_LESSON = 'REMOVE_LESSON'
};

export const actions = {
    addLesson: () => ({ type: ActionTypeEnum.ADD_LESSON }),
    removeLesson: () => ({ type: ActionTypeEnum.REMOVE_LESSON })
};