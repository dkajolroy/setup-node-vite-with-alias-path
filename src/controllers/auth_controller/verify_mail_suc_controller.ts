import { NextFunction, Request, Response } from "express";

export function verifyMailSuccess(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // add signIn
  } catch (error) {
    next(error);
  }
}
