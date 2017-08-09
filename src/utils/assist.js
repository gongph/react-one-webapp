// 服务端根路径
export const baseUrl = 'http://v3.wufazhuce.com:8000/'

/**
 * 获取最新的年月字符串, 例如：yyyy-mm
 */

function retLastYearMonthStr () {
  const date = new Date(), year = date.getFullYear(), month = date.getMonth() + 1;
  const yearMonthStr = `${year}-${month}`
  return yearMonthStr
}

export { retLastYearMonthStr }