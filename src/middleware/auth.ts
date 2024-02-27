import { serverConfig } from "@src/config/server_config";
import { NextFunction, Request, Response } from "express";

export async function userAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies[serverConfig.serverCookie];
  try {
    // Decode json token
    // send data to body
    next();
  } catch (error) {
    next();
  }
}
