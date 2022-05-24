import request from '@/utils/request'

// 获取联系人列表
export function getContactsList(query) {
  return request({
    url: '/system/contacts/list',
    method: 'get',
    params: query
  })
}
// 新增事由
export function addUserPhone(data) {
    return request({
      url: '/system/contacts',
      method: 'post',
      data: data
    })
}
// 删除
export function delUserPhone(id) {
    return request({
      url: `/system/contacts/${id}`,
      method: 'delete'
    })
}
// 修改
export function changeUserPhone(data) {
    return request({
      url: `/system/contacts`,
      method: 'put',
      data: data
    })
}