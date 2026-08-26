import { MessagerReducerActions } from "../data-types/enums/messager-reducer-action-enum";
import { MessegerDataTypes } from "../data-types/enums/messeger-data-types-enum";
import type { MessagerActionsType } from "../data-types/types/MessagerActionsType";
import type { MessageType } from "../data-types/types/MessageType";

const MessagerReducer = (messageTypes: MessageType[], action: MessagerActionsType) => {
    switch (action.type) {

        case MessagerReducerActions.ADD_JSX: {
            const newMessage: MessageType = {
                id: Date.now.toString(),
                type: MessegerDataTypes.JSX,
                jsxElement: action.jsx ?? <></>,
                timestamp: new Date(),
                userId: "",
            };
            return [
                ...messageTypes,
                newMessage,
            ];
        }
        default:
            return messageTypes;
    }
};

export default MessagerReducer;