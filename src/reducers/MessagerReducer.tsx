import type { MessagerActionsType } from "../data-types/types/MessagerActionsType";
import type { MessageType } from "../data-types/types/MessageType";
import { MessagerReducerActions } from "../data-types/enums/messager-reducer-action-enum";

const MAX_MESSAGES = 500;

const MessagerReducer = (messageTypes: MessageType[], action: MessagerActionsType) => {
    switch (action.type) {

        case MessagerReducerActions.ADD_MESSAGE: {
            return [...messageTypes, action.message].slice(-MAX_MESSAGES);
        }
        case MessagerReducerActions.CLEAR:{
            return [];
        }
        default:
            return messageTypes;
    }
};

export default MessagerReducer;