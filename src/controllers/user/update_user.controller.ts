import { NextFunction, Request, Response } from "express";

export default async function updateUser(
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
