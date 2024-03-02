import { server } from "@src/config/server_config";
import { Response } from "express";

export function sendCookieClient(res: Response, value: string | boolean) {
  res.cookie(server.clientAuthCookie, value, {
    secure: true,
    maxAge: server.cookieExpire,
  });
}
export function sendCookieServer(res: Response, value: string) {
  res.cookie(server.serverAuthCookie, value, {
    httpOnly: true,
    secure: true,
    maxAge: server.cookieExpire,
  });
}
