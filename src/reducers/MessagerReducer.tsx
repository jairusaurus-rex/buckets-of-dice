import type { MessagerActionsType } from "../data-types/types/MessagerActionsType";
import type { MessageType } from "../data-types/types/MessageType";

const MessagerReducer = (messageTypes: MessageType[], action: MessagerActionsType) => {
    switch (action.type) {


        default:
            return messageTypes;
    }
};

export default MessagerReducer;