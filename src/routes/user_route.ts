import updateUser from "@src/controllers/user/update_user.controller";
import { Router } from "express";
export const UserRoute = Router();

UserRoute.route("/data").put(updateUser);
