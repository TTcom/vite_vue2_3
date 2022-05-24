import request from '@/utils/request'

export const getList = query => {
  return request({
    url: '/z-sys-statistics/list',
    method: 'get',
    params: query
  })
}
