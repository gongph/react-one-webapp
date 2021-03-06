import { baseUrl, retLastYearMonthStr, getJson } from '../utils/assist.js' 

/**
 * model 层
 * 处理问答列表数据请求
 */

function getQuestions () {
  return getJson(baseUrl + 'api/question/bymonth/' + retLastYearMonthStr())
}

function getQuestionById (id) {
  return getJson(baseUrl + 'api/question/' + id)
}

export {
  getQuestions,
  getQuestionById
}