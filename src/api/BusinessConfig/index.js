import request from '@/utils/request'

/**
 * @description: 获取工种列表
 * @param {*} query
 * @return {*}
 */
export const getGongZhongList = () => {
  return request({
    url: '/zSys-dict-gogn-zhong/list',
    method: 'get',
    params: {
      pageSize: 1000000
    }
  })
}

/**
 * @description: 获取工种字典
 * @param {*} query
 * @return {*}
 */
 export const getGongZhongDict = () => {
  return request({
    url: '/tree/gongZhongDict',
    method: 'get',
  })
}

/**
 * @description: 获取事由字典
 * @param {*} query
 * @return {*}
 */
 export const getshiYouDict = () => {
  return request({
    url: '/tree/shiYouDict',
    method: 'get',
  })
}


/**
 * @description: 新增工种
 * @param {*} data
 * @return {*}
 */
export const addGongZhong = data => {
  return request({
    url: '/zSys-dict-gogn-zhong',
    method: 'post',
    data,
  })
}

/**
 * @description: 修改工种
 * @param {*} data
 * @return {*}
 */
 export const updateGongZhong = data => {
  return request({
    url: '/zSys-dict-gogn-zhong',
    method: 'put',
    data
  })
}

/**
 * @description: 删除工种
 * @param {*} ids
 * @return {*}
 */
export const removeGongZhong = ids => {
  return request({
    url: `/zSys-dict-gogn-zhong/${ids}`,
    method: 'delete',
  })
}



/**
 * @description: 获取事由列表
 * @param {*} query
 * @return {*}
 */
 export const getShiYouList = () => {
  return request({
    url: '/zSys-dict-shi-you/list',
    method: 'get',
    params: {
      pageSize: 1000000
    }
  })
}

/**
 * @description: 新增事由
 * @param {*} data
 * @return {*}
 */
export const addShiYou = data => {
  return request({
    url: '/zSys-dict-shi-you',
    method: 'post',
    data,
  })
}

/**
 * @description: 修改事由
 * @param {*} data
 * @return {*}
 */
 export const updateShiYou = data => {
  return request({
    url: '/zSys-dict-shi-you',
    method: 'put',
    data
  })
}

/**
 * @description: 删除事由
 * @param {*} ids
 * @return {*}
 */
export const removeShiYou = ids => {
  return request({
    url: `/zSys-dict-shi-you/${ids}`,
    method: 'delete',
  })
}

/*-----------------------------------小程序公告管理---------------------------*/
  /**
   * @description: 获取事由列表
   * @param {*} query
   * @return {*}
   */
  export const getGongGaoList = () => {
    return request({
      url: '/zSys-dict-gong-gao/list',
      method: 'get',
      params: {
        pageSize: 1000000
      }
    })
  }

  /**
   * @description: 新增事由
   * @param {*} data
   * @return {*}
   */
  export const addGongGao = data => {
    return request({
      url: '/zSys-dict-gong-gao',
      method: 'post',
      data,
    })
  }

  /**
   * @description: 修改事由
   * @param {*} data
   * @return {*}
   */
  export const updateGongGao = data => {
    return request({
      url: '/zSys-dict-gong-gao',
      method: 'put',
      data
    })
  }

  /**
   * @description: 删除事由
   * @param {*} ids
   * @return {*}
   */
  export const removeGongGao = ids => {
    return request({
      url: `/zSys-dict-gong-gao/${ids}`,
      method: 'delete',
    })
}
