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

function getJson (url) {
  let promise = new Promise((resolve, reject) => {
    let client = new XMLHttpRequest()
    client.open("GET", url)
    client.onreadystatechange = handler
    client.responseType = "json"
    client.setRequestHeader("Accept", "application/json")
    client.send()

    function handler () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
  })
  return promise
}

function getArticleEditor (ai, editorEmail) {
  if (!ai) return ''
  return ai.substring(1, ai.indexOf(editorEmail) - 1)
}

export {
  retLastYearMonthStr,
  getJson,
  getArticleEditor
}