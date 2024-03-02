import { NextFunction, Request, Response } from "express";

// Send OTP | Url to mail
export default async function forgetRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    //input validate
    //send otp to email
  } catch (error) {
    next(error);
  }
}
