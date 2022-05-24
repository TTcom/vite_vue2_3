import request from '@/utils/request'

/**
 * @description: 获取施工人员列表
 * @param {*} query
 * @return {*}
 */
export const getList = query => {
  return request({
    url: '/zSys-zheng-yi/list',
    method: 'get',
    params: query
  })
}

