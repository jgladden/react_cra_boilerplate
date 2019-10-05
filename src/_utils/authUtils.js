import cookieUtil from "./cookieUtil";

export const getAuthTokenCookie = () => {
  return cookieUtil.getCookie("AUTHTOKEN") || "";
};

export const setAuthTokenCookie = token => {
  const exp = new Date(+new Date() + 1.44e7);
  cookieUtil.setCookie("AUTHTOKEN", token, exp, "/", ".farrung.com", true);
};

export const deleteAuthTokenCookie = () => {
  console.log("called");
  cookieUtil.deleteCookie("AUTHTOKEN", "/", ".farrung.com");
};

export const parseJwt = token => {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
};
