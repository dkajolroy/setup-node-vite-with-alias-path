export function importEnv() {
  const {
    PORT,
    CLIENT_URL,
    CLOUD_NAME,
    CLOUD_API_KEY,
    CLOUD_API_SECRET,
    SECRET_KEY,
    DATABASE_URL,
  } = process.env;

  if (!PORT) {
    console.log("PORT is not defined !");
  }
  if (!SECRET_KEY) {
    console.log("SECRET_KEY is not defined !");
    throw new Error("SECRET_KEY not unavailable !");
  }
  if (!DATABASE_URL) {
    console.log("DATABASE_URL is not defined !");
    throw new Error("DATABASE_URL not unavailable !");
  }
  if (!CLIENT_URL) {
    console.log("CLIENT_URL is not defined !");
    throw new Error("CLIENT_URL not unavailable !");
  }
  if (!CLOUD_NAME) {
    console.log("CLOUD_NAME is not defined !");
    throw new Error("CLOUD_NAME not unavailable !");
  }
  if (!CLOUD_API_KEY) {
    console.log("CLOUD_API_KEY is not defined !");
    throw new Error("CLOUD_API_KEY not unavailable !");
  }
  if (!CLOUD_API_SECRET) {
    console.log("CLOUD_API_SECRET is not defined !");
    throw new Error("CLOUD_API_SECRET not unavailable !");
  }
  return {
    PORT,
    SECRET_KEY,
    DATABASE_URL,
    CLIENT_URL,
    CLOUD_NAME,
    CLOUD_API_KEY,
    CLOUD_API_SECRET,
  };
}
