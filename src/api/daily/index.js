import request from '@/utils/request'

export const getList = query => {
  return request({
    url: '/zSys-ri-bao/list',
    method: 'get',
    params: query
  })
}
