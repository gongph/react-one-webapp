/**
 * model 层
 * 处理文章列表数据请求
 */
import { baseUrl, retLastYearMonthStr, getJson } from '../utils/assist.js'

/**
 * 获取当月的文章列表
 */

function getEssays () {
  return getJson(baseUrl + 'api/essay/bymonth/' + retLastYearMonthStr())
}

/**
 * 根据id获取文章
 */

function getEssayById (id) {
  return getJson(baseUrl + 'api/essay/' + id)
}

export {
  getEssays,
  getEssayById
}

