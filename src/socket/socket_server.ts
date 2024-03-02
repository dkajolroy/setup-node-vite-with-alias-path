import { addOnlineUser, removeOnlineUser } from "@src/socket/socket_store";
import { Server } from "socket.io";

export default function socketServer(io: Server) {
  // New Connection
  io.sockets.on("connection", (socket) => {
    addOnlineUser(socket.id);
    console.log("Online user:" + socket.id);

    // Socket operation
    // Disconnect method
    socket.on("disconnect", () => {
      // disconnect
      removeOnlineUser(socket.id);
      // online = online - 1;
    });
  });
}
