import { baseUrl, retLastYearMonthStr } from '../utils/assist.js'

/**
 * model 层
 * 处理文章列表数据请求
 */

function getEssays (cb) {
  $.ajax({
    url: baseUrl + 'api/essay/bymonth/' + retLastYearMonthStr(),
    type: 'GET',
    dataType: 'JSON',
    success: function (data) {
      cb(data)
    }
  });
}

export {
  getEssays
}

