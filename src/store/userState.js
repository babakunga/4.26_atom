import { arom } from "recoil";

export const userState = arom({
  key: "userState",
  default: { isAdmin: false }
});
