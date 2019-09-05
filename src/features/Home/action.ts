import { FETCH_CLIENT_VERSION_REQUEST } from "./constants";
import { ClientVersionForm } from "../../models/Bo/HomeBo";

export interface FetchClientVersionRequest {
  type: FETCH_CLIENT_VERSION_REQUEST;
  payload: ClientVersionForm;
}

export function fetchClientVersion(param: ClientVersionForm): FetchClientVersionRequest {
  return {
    type: FETCH_CLIENT_VERSION_REQUEST,
    payload: param,
  };
}