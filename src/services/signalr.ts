import { HubConnectionBuilder } from "@microsoft/signalr";

export const createConnection = (room: string, userName: string) => {
     const connection = new HubConnectionBuilder()
          .withUrl(
               `http://localhost:5235/hubs/dice?room=${encodeURIComponent(room)}&userName=${encodeURIComponent(userName)}`
          )
          .build();

     connection.onclose((error) => {
          if (error) {
               console.error("SignalR connection closed unexpectedly:", error);
          }
     });

     return connection;
};