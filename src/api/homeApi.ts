import { ClientVersionForm } from '../models/Bo/HomeBo';
import axios from "axios";
/**
 * 获取客户端版本
 *
 * @export
 * @param {ClientVersionForm} clientVersionForm
 * @returns {Promise<ClientVersionForm>}
 */
export function fetchClientVersion(): Promise<ClientVersionForm> {
  return new Promise((resolve, reject) => {
    axios.get("/fetchClientVersion").then((res) => {
      resolve(res.data.data);
    }).catch((error) => {
      console.log(error);
    })
  })
}
