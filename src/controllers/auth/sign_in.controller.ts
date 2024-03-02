import { NextFunction, Request, Response } from "express";

export default async function SignIn(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    //input validate
    //find user
    //send cookie
    //send data
  } catch (error) {
    next(error);
  }
}
