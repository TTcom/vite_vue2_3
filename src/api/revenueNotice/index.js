import request from '@/utils/request'

/**
 * @description: 获取收入通知汇总列表
 * @param {*} query
 * @return {*}
 */
 export const getShouRuNoticList = query => {
  return request({
    url: '/zSys-ri-shou-ri-notic/list',
    method: 'get',
    params: query
  })
}

/**
 * @description: 获取收入通知汇总详情
 * @param {*} query
 * @return {*}
 */
export const getShouRuNoticDetailsInfo = id => {
  return request({
    url: `/zSys-ri-shou-ri-notic/getBatchInfo/${id}`,
    method: 'get',
  })
}

/**
 * @description: 删除收入通知汇总列表
 * @param {*} query
 * @return {*}
 */
 export const removeShouRuNotic = id => {
  return request({
    url: `/zSys-ri-shou-ri-notic/${id}`,
    method: 'delete'
  })
}



/**
 * @description: 获取收入通知汇总详情列表
 * @param {*} query
 * @return {*}
 */
 export const getShouRuNoticDetailsList = query => {
  return request({
    url: `/zSys-ri-shou-ri-notic-details/list`,
    method: 'get',
    params: query
  })
}

/**
 * @description: 获取收入通知汇总详情
 * @param {*} query
 * @return {*}
 */
export const getShouRuNoticDetails = id => {
  return request({
    url: `/zSys-ri-shou-ri-notic/${id}`,
    method: 'get',
  })
}


/**
 * @description: 获取收入通知汇总详情
 * @param {*} query
 * @return {*}
 */
 export const getShouRuNoticMessage = id => {
  return request({
    url: `/zSys-ri-shou-ri-notic-details/faqidongzhi`,
    method: 'get',
    params: {
      noticDetailsId: id
    }
  })
}

