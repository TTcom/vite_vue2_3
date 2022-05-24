import request from '@/utils/request'

/**
 * @description: 获取项目列表
 * @param {*} query
 * @return {*}
 */
export const getItemList = query => {
  return request({
    url: '/zSys-project/list',
    method: 'get',
    params: query
  })
}

export const getCjItemList = query => {
  return request({
    url: '/zSys-project/cjlist',
    method: 'get',
    params: query
  })
}


/**
 * @description: 新增项目
 * @param {*} data
 * @return {*}
 */
export const addItemList = data => {
  return request({
    url: '/zSys-project',
    method: 'post',
    data,
  })
}
export const addCjItemList = data => {
  return request({
    url: '/zSys-project/cjs',
    method: 'post',
    data,
  })
}

/**
 * @description: 修改项目
 * @param {*} data
 * @return {*}
 */
 export const updateItemList = data => {
  return request({
    url: '/zSys-project',
    method: 'put',
    data
  })
}

export const updateCjItemList = data => {
  return request({
    url: '/zSys-project/cjs',
    method: 'put',
    data
  })
}

/**
 * @description: 删除项目
 * @param {*} ids
 * @return {*}
 */
export const removeItemList = ids => {
  return request({
    url: `/zSys-project/${ids}`,
    method: 'delete',
  })
}


export function removeCjsItemList(projectId,ids) {
  return request({
    url: `/zSys-project/cjs/`+projectId+"/"+ids,
    method: 'delete',
  })
}


// 查询项目详细
export function getItemData(id) {
  return request({
    url: '/zSys-project/' + id,
    method: 'get'
  })
}

export function getCjsItemData(id) {
  return request({
    url: '/zSys-project/cjs/' + id,
    method: 'get'
  })
}



/**
 * @description: 获取项目字典列表
 * @param {*} query
 * @return {*}
 */
export const getItemDictList = () => {
  return request({
    url: '/tree/projectTree',
    method: 'get',
  }).then(res => {

    const deepHandleList = list => {
      if (!list.length) {
        return []
      }

      return list.map(({ name, id, cjss, xmjl, phone }) => {
        return {
          label: name,
          value: id,
          children: (cjss && cjss.length) ? deepHandleList(cjss) : null,
          xmjl,
          phone,
        }
      })
    }

    res.data = deepHandleList(res.data.map(v => v.next))
    return res
  })
}


/**
 * @description: 获取省市联动
 * @param {*} query
 * @return {*}
 */
export const getDistrictTreeList = () => {
  return request({
    url: '/tree/DistrictTree',
    method: 'get',
  }).then(res => {

    const deepHandleList = list => {
      if (!list.length) {
        return null
      }

      return list.map(({ districtName, districtId, cjss, xmjl, phone }) => {
        return {
          label: districtName,
          value: districtId,
          children: (cjss && cjss.length) ? deepHandleList(cjss) : null,
          xmjl,
          phone,
        }
      })
    }

    res.data = deepHandleList(res.data.map(v => v.next))
    return res
  })
}

export const getDistrictProvTreeList = () => {
  return request({
    url: '/tree/districtProvTree',
    method: 'get',
  }).then(res => {

    const deepHandleList = list => {
      if (!list.length) {
        return null
      }

      return list.map(({ districtName, districtId, cjss, xmjl, phone }) => {
        return {
          label: districtName,
          value: districtId,
          children: (cjss && cjss.length) ? deepHandleList(cjss) : null,
          xmjl,
          phone,
        }
      })
    }

    res.data = deepHandleList(res.data.map(v => v.next))
    return res
  })
}

/**
 * @description: 获取班组字典列表
 * @param {*} query
 * @return {*}
 */
 export const getTeamDictList = () => {
  return request({
    url: '/tree/projectTree3',
    method: 'get',
  })
}



export const findItemDictData = (list, value) => {
  let findValue = null
  const findData = (_list, _value) => {
    _list.forEach(v => {
      if (v.value === _value) {
        findValue = v
      }

      if (v.children && !findValue) {
        findData(v.children, value)
      }
    })
  }


  findData(list, value)

  return findValue || {}
}


/**
 * @description: 获取班组列表
 * @param {*} query
 * @return {*}
 */
 export const getTeamList = query => {
  return request({
    url: '/zSys-project-cjs-banZu/list',
    method: 'get',
    params: query
  })
}


export const getTeamProjectList = query => {
  return request({
    url: '/zSys-project-cjs-banZu/plist',
    method: 'get',
    params: query
  })
}


/**
 * @description: 新增班组
 * @param {*} data
 * @return {*}
 */
export const addTeamList = data => {
  return request({
    url: '/zSys-project-cjs-banZu',
    method: 'post',
    data,
  })
}

/**
 * @description: 修改班组
 * @param {*} data
 * @return {*}
 */
 export const updateTeamList = data => {
  return request({
    url: '/zSys-project-cjs-banZu',
    method: 'put',
    data
  })
}

/**
 * @description: 删除项目
 * @param {*} ids
 * @return {*}
 */
export const removeTeamList = ids => {
  return request({
    url: `/zSys-project-cjs-banZu/${ids}`,
    method: 'delete',
  })
}


// 查询项目详细
export function getTeamData(id) {
  return request({
    url: '/zSys-project-cjs-banZu/' + id,
    method: 'get'
  })
}
// 退场
export const updateTeamTC = data => {
  return request({
    url: '/zSys-project-cjs-banZu/tc',
    method: 'put',
    data
  })
}

// 地图查询
export function getsuggestion(keyword,region) {
  return request({
    url: '/map/suggestion?keyword=' + keyword+'&region='+region,
    method: 'get'
  })
}
// 地图查询
export function getgeocoder(location) {
  return request({
    url: '/map/geocoder?location=' + location,
    method: 'get'
  })
}

//获取承建商信息
export function selectCPeojectCjs() {
  return request({
    url: '/zSys-project-cjs/selectCPeojectCjs',
    method: 'get'
  })
}

