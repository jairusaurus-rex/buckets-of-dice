import { HubConnectionBuilder } from "@microsoft/signalr";

export const createConnection = (room: string, userName: string) => {
     const connection = new HubConnectionBuilder()
          .withUrl(
               `${import.meta.env.VITE_SIGNALR_HUB_URL}/dice?room=${encodeURIComponent(room)}&userName=${encodeURIComponent(userName)}`
          )
          .build();

     connection.onclose((error) => {
          if (error) {
               console.error("SignalR connection closed unexpectedly:", error);
          }
     });

     return connection;
};