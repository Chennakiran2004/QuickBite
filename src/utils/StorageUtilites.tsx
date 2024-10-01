import Cookies from "js-cookie";

export const setCookie = (
  name: string,
  value: string,
  options: Cookies.CookieAttributes = {}
) => {
  Cookies.set(name, value, options);
};

export const getCookie = (): string | undefined => Cookies.get("access_token");

export const removeCookie = () => {
  Cookies.remove("jwt_token");
};
