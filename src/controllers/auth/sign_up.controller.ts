import { NextFunction, Request, Response } from "express";

export default async function SignUp(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    //input validate
    //Create and find exist
    //send cookie
    //send data
  } catch (error) {
    next(error);
  }
}
