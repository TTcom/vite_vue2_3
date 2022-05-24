import request from '@/utils/request'

// 查询事由列表
export function listYou(query) {
  return request({
    url: '/zSys-dict-shi-you/list',
    method: 'get',
    params: query
  })
}

// 查询事由详细
export function getYou(id) {
  return request({
    url: '/zSys-dict-shi-you/' + id,
    method: 'get'
  })
}

// 新增事由
export function addYou(data) {
  return request({
    url: '/zSys-dict-shi-you',
    method: 'post',
    data: data
  })
}

// 修改事由
export function updateYou(data) {
  return request({
    url: '/zSys-dict-shi-you',
    method: 'put',
    data: data
  })
}

// 删除事由
export function delYou(id) {
  return request({
    url: '/zSys-dict-shi-you/' + id,
    method: 'delete'
  })
}
