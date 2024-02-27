import { serverConfig } from "@src/config/server_config";
import { Response } from "express";

export function sendServerCookie(res: Response, { token }: { token: string }) {
  res.cookie(serverConfig.serverCookie, token, {
    httpOnly: true,
    secure: true,
    maxAge: serverConfig.cookieExpire,
  });
}

export function sendClientCookie(res: Response, { value }: { value: any }) {
  res.cookie(serverConfig.clientCookie, value, {
    secure: true,
    maxAge: serverConfig.cookieExpire,
  });
}
