import { MessageTypeEnum } from "../enums/message-type-enum";
import type { DiceType } from "./DiceType";

type MessageMetadata = {
    id: string;
    timestamp: string;
    userId: string;
    userName: string;
};

export type MessageType =
    | (MessageMetadata & {
        type: typeof MessageTypeEnum.TEXT;
        content: {
            text: string;
        };
    })
    | (MessageMetadata & {
        type: typeof MessageTypeEnum.DICE_ROLL;
        content: {
            rollTitle?: string;
            dice: DiceType[];
            result: number;
            bestDice?: string[];
        };
    });