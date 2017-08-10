import { baseUrl, retLastYearMonthStr, getJson } from '../utils/assist.js' 

/**
 * model 层
 * 处理插画列表数据请求
 */

function getHps () {
  return getJson(baseUrl + 'api/hp/bymonth/' + retLastYearMonthStr())
}

function getHpById (id) {
  return getJson(baseUrl + 'api/hp/detail/' + id)
}

export {
  getHps,
  getHpById
}