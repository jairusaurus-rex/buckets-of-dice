import { MessagerReducerActions } from "../enums/messager-reducer-action-enum";
import type { MessageType } from "./MessageType";

export type MessagerActionsType =
    | {
        type: typeof MessagerReducerActions.ADD_MESSAGE;
        message: MessageType;
    }
    | {
        type: typeof MessagerReducerActions.CLEAR;
    };