import { importEnv } from "@src/config/env_config";

// email verify
// forget password
// change email verify
export default function OtpRequest(
  name: string,
  token: string,
  otp: number,
  title: string // FORGET PASSWORD | EMAIL VERIFICATION
) {
  const url = `${importEnv().CLIENT_URL}/forget/password/${token}`;
  // send email with name/otp/url
  return url;
}
