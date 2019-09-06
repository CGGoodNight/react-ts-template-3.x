import { ClientVersionForm } from '../models/Bo/HomeBo';

/**
 * 获取客户端版本
 *
 * @export
 * @param {ClientVersionForm} clientVersionForm
 * @returns {Promise<ClientVersionForm>}
 */
export function fetchClientVersion(): Promise<ClientVersionForm> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name: "create-reac-app-internet", version: 3.1})
    }, 500)
  })
}
