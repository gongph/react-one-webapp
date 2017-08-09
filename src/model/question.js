import { baseUrl, retLastYearMonthStr } from '../utils/assist.js' 

/**
 * model 层
 * 处理问答列表数据请求
 */

function getQuestions (cb) {
  $.ajax({
    url: baseUrl + 'api/question/bymonth/' + retLastYearMonthStr(),
    type: 'GET',
    dataType: 'JSON',
    success: function (data) {
      cb(data)
    }
  });
}

export {
  getQuestions
}