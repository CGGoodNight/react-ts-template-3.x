import { FETCH_CLIENT_VERSION_REQUEST, FETCH_CLIENT_VERSION_REQUEST_INTERNET } from "./constants";
import { ClientVersionForm } from "../../models/Bo/HomeBo";

export interface FetchClientVersionRequest {
  type: FETCH_CLIENT_VERSION_REQUEST;
  payload: ClientVersionForm;
}

export interface FetchClientVersionRequestInternet {
  type: FETCH_CLIENT_VERSION_REQUEST_INTERNET
}

export function fetchClientVersion(param: ClientVersionForm): FetchClientVersionRequest {
  return {
    type: FETCH_CLIENT_VERSION_REQUEST,
    payload: param,
  };
}

export function fetchClientVersionInternet(): FetchClientVersionRequestInternet {
  return {
    type: FETCH_CLIENT_VERSION_REQUEST_INTERNET
  };
}