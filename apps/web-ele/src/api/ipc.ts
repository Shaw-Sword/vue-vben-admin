import { ElMessage } from 'element-plus';

/**
 * 通用 ipc 调用
 * @param path 'module.method'
 * @param payload 参数对象
 */
async function ipcCall<T = any>(path: string, payload?: any): Promise<T> {
  try {
    const res = await window.electron.ipcRenderer.invoke('rpc', {
      path,
      payload,
    });
    if (res.code !== 200) {
      // ElMessage.error(res.msg || '调用失败');
      throw new Error(res.msg || '调用失败');
    }
    console.warn('ipcCall:', path, 'payload:', payload, '结果:', res);
    return res.data;
  } catch (error: any) {
    ElMessage.error(error.message || 'IPC调用异常');
    throw error;
  }
}

export default ipcCall;

// /**
//  * 封装模块化接口，方便调用
//  */
// export const ipcApi = {
//   user: {
//     create: (dto: any) => ipcCall('user.create', dto),
//     list: () => ipcCall('user.list'),
//     get: (id: number) => ipcCall('user.get', { id }),
//   },
//   device: {
//     get: (id: number) => ipcCall('device.get', { id }),
//     list: () => ipcCall('device.list'),
//   },
//   // 新模块直接在这里加
// };
