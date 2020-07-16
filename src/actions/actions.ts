// @ts-ignore
import { LOGIN, UNLOG } from "../constants/action-types.ts";

export function auth_login(payload: Object) {
  return { type: LOGIN, payload };
}

export function auth_unlog(payload: Object) {
  return { type: UNLOG, payload };
}
