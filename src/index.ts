import db_connect from "@src/config/db_config";
import { importEnv } from "@src/config/env_config";
import { AuthRoute } from "@src/routes/auth_route";
import { UserRoute } from "@src/routes/user_route";
import socket from "@src/socket/socket_server";
import { errorHandler } from "@src/utils/error_handler";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";

// config
dotenv.config();
db_connect();
const app = express();
const PORT = importEnv().PORT || 8080;
// cors config
app.use(
  cors({
    origin: importEnv().CLIENT_URL || "/",
    credentials: true,
  })
);
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        // for use cdn .json from any host
        defaultSrc: ["'self'", "https: data:"],
        // for use image/emoji from any host
        "img-src": ["'self'", "https: data:"],
      },
    },
  })
);
// socket server
const httpServer = createServer(app);
const io = new Server(httpServer);
socket(io);

// Public routes
app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);
// Private routes
// app.use("/api/post", PostRoute);

// make frontend inside client directory to run single port
const root = path.resolve();
app.use(express.static(path.join(root, "client/dist")));
app.use("*", (_, res) => {
  res.status(200).sendFile(path.join(root, "/client/dist/index.html"));
});

// error handler
app.use(errorHandler);

httpServer.listen(PORT, () => {
  console.log(`Server.run⚡http://localhost:${PORT}`);
});
