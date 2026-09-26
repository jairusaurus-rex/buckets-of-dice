import { HubConnectionBuilder } from "@microsoft/signalr";

export const connection = new HubConnectionBuilder()
    .withUrl("http://localhost:5235/hubs/dice")
    .build();