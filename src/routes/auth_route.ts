import forgetRequest from "@src/controllers/auth/forget_req.controller";
import forgetPassword from "@src/controllers/auth/forget_suc.controller";
import SignIn from "@src/controllers/auth/sign_in.controller";
import SignUp from "@src/controllers/auth/sign_up.controller";
import { Router } from "express";
export const AuthRoute = Router();

AuthRoute.post("/sign-in", SignIn);
AuthRoute.post("/sign-up", SignUp);
AuthRoute.post("/req-otp", forgetRequest);
AuthRoute.post("/forget-password", forgetPassword);
