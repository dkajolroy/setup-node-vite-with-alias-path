export function env_config() {
  const { DATABASE_URL } = process.env;

  // validation warning
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL not found !");
  }

  // export env
  return {
    DATABASE_URL,
  };
}
