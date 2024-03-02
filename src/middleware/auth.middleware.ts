import { server } from "@src/config/server_config";
import { sendCookieClient } from "@src/utils/cookies";
import { decodeToken } from "@src/utils/token";
import { NextFunction, Request, Response } from "express";

export function userAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies[server.serverAuthCookie];
  if (token) {
    try {
      //decode token
      const decode = decodeToken(token);
      req.body.authId = decode.user; // authentic user
      next();
    } catch (error) {
      // login expire
      sendCookieClient(res, false);
      return res.send({ message: "Login expire please login agin !" });
    }
  } else {
    sendCookieClient(res, false);
    res.status(400).send({ message: "You are not authenticate !" });
  }
}
