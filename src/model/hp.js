import { baseUrl, retLastYearMonthStr } from '../utils/assist.js' 

/**
 * model 层
 * 处理插画列表数据请求
 */

function getHps (cb) {
  $.ajax({
    url: baseUrl + 'api/hp/bymonth/' + retLastYearMonthStr(),
    type: 'GET',
    dataType: 'JSON',
    success: function (data) {
      cb(data)
    }
  });
}

export {
  getHps
}