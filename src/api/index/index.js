import request from '@/utils/request'

export const getIndex = query => {
  return request({
    url: '/index',
    method: 'get',
    params: query
  })
}
