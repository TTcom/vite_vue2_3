import request from '@/utils/request'

// 查询单位列表
export function listCompany(query) {
  return request({
    url: '/system/company/list',
    method: 'get',
    params: query
  })
}

// 查询单位详细
export function getCompany(id) {
  return request({
    url: '/system/company/' + id,
    method: 'get'
  })
}

// 新增单位
export function addCompany(data) {
  return request({
    url: '/system/company',
    method: 'post',
    data: data
  })
}

// 修改单位
export function updateCompany(data) {
  return request({
    url: '/system/company',
    method: 'put',
    data: data
  })
}

// 删除单位
export function delCompany(id) {
  return request({
    url: '/system/company/' + id,
    method: 'delete'
  })
}
export function getcjByProjectId(id) {
  return request({
    url: '/zSys-project/getcjByProjectId/' + id,
    method: 'get'
  })
}
