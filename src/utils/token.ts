import { importEnv } from "@src/config/env_config";
import Jwt from "jsonwebtoken";

export function newToken(user: string) {
  return Jwt.sign({ user }, importEnv().SECRET_KEY, {
    expiresIn: "30d",
  });
}

export function decodeToken(token: string) {
  return Jwt.verify(token, importEnv().SECRET_KEY) as { user: string };
}
