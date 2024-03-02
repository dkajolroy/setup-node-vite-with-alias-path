import { NextFunction, Request, Response } from "express";

// Forget change Password
export default async function forgetPassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    //input validate
    //find user
    //update
    //send data
  } catch (error) {
    next(error);
  }
}
