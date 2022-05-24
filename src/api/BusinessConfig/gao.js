import request from '@/utils/request'

// 查询公告列表
export function listGao(query) {
  return request({
    url: '/zSys-dict-gong-gao/list',
    method: 'get',
    params: query
  })
}

// 查询公告详细
export function getGao(id) {
  return request({
    url: '/zSys-dict-gong-gao/' + id,
    method: 'get'
  })
}

// 新增公告
export function addGao(data) {
  return request({
    url: '/zSys-dict-gong-gao',
    method: 'post',
    data: data
  })
}

// 修改公告
export function updateGao(data) {
  return request({
    url: '/zSys-dict-gong-gao',
    method: 'put',
    data: data
  })
}

// 删除公告
export function delGao(id) {
  return request({
    url: '/zSys-dict-gong-gao/' + id,
    method: 'delete'
  })
}
