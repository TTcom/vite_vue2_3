import request from '@/utils/request'

/**
 * @description: 获取施工人员列表
 * @param {*} query
 * @return {*}
 */
export const getList = query => {
  return request({
    url: '/zSys-ri-bao-user/list',
    method: 'get',
    params: query
  })
}


/**
 * @description: 删除项目
 * @param {*} ids
 * @return {*}
 */
export const removeRiBaoUserDetails = ids => {
  return request({
    url: `/zSys-ri-bao-user/${ids}`,
    method: 'delete',
  })
}

/**
 * @description: 添加退场时间
 * @param {*} ids
 * @return {*}
 */
export function tcBaoUser( ids,tcTime ) {
  return request({
    url: `/zSys-ri-bao-user/tc/${ids}/${tcTime}`,
    method: 'put',
  })
}

/**
* @description: 添加进场时间
* @param {*} ids
* @return {*}
  */
export function jcBaoUser( ids,rcTime ) {
  return request({
    url: `/zSys-ri-bao-user/jc/${ids}/${rcTime}`,
    method: 'put',
  })
}

/**
 * @description: 更换班组
 * @param {*} query
 * @return {*}
 */
export const updateghbz = data => {
  return request({
    url: '/zSys-ri-bao-user/ghbz',
    method: 'put',
    data
  })
}

/**
 * @description: 获取施工人员参与项目
 * @param {*} query
 * @return {*}
 */
 export const getdetailsRiBao = query => {
  return request({
    url: '/zSys-ri-bao-user/detailsRiBao',
    method: 'get',
    params: query
  })
}

/**
 * @description: 获取施工人员详情
 * @param {*} query
 * @return {*}
 */

export const getRiBaoUserDetails = id => request({
  url: `/zSys-ri-bao-user/${id}`
})

/**
 * @description: 更新施工人员班组
 * @param {*} id
 * @return {*}
 */
export const putRiBaoUserDetails = data => request({
  url: `/zSys-ri-bao-user`,
  method: 'put',
  data
})

