import * as homeApi from '../api/homeApi';
import { ClientVersionForm } from '../models/Bo/HomeBo';

/**
 * 获取客户端版本
 *
 * @export
 * @param {ClientVersionForm} clientVersionForm
 * @returns {Promise<ClientVersionBO>}
 */
export function fetchClientVersionService(): Promise<ClientVersionForm> {
  return homeApi.fetchClientVersion();
}
