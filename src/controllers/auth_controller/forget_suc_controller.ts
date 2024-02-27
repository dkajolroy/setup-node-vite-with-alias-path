import { NextFunction, Request, Response } from "express";

export function forgetSuccess(req: Request, res: Response, next: NextFunction) {
  try {
    // add signIn
  } catch (error) {
    next(error);
  }
}
