import request from '@/utils/request'

// 查询工种列表
export function listZhong(query) {
  return request({
    url: '/zSys-dict-gogn-zhong/list',
    method: 'get',
    params: query
  })
}

// 查询工种详细
export function getZhong(id) {
  return request({
    url: '/zSys-dict-gogn-zhong/' + id,
    method: 'get'
  })
}

// 新增工种
export function addZhong(data) {
  return request({
    url: '/zSys-dict-gogn-zhong',
    method: 'post',
    data: data
  })
}

// 修改工种
export function updateZhong(data) {
  return request({
    url: '/zSys-dict-gogn-zhong',
    method: 'put',
    data: data
  })
}

// 删除工种
export function delZhong(id) {
  return request({
    url: '/zSys-dict-gogn-zhong/' + id,
    method: 'delete'
  })
}
