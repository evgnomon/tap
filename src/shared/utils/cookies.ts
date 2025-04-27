// Utility to parse cookies (works on both server and client)
export const parseCookies = (
  cookieString: string | undefined,
): Record<string, string> => {
  if (typeof window !== "undefined") {
    cookieString = document.cookie;
  }
  if (!cookieString) {
    return {};
  }
  return cookieString.split(";").reduce(
    (acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );
};
