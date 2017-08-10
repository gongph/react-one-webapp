import { baseUrl, retLastYearMonthStr, getJson } from '../utils/assist.js' 

/**
 * model 层
 * 处理插画列表数据请求
 */

function getHps () {
  return getJson(baseUrl + 'api/hp/bymonth/' + retLastYearMonthStr())
}

export {
  getHps
}