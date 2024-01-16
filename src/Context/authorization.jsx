import { createContext } from "react";

export const UserContext = createContext({
  userData: "",
  changingUserData: () => {},
});

export const TokenContext = createContext({
  tokenData: "",
  changingTokenData: () => {},
});