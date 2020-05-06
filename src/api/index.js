import request from '../utils/request'

export function getNewsList () {
  return request({
    url: 'news/index',
    method: 'get'
  })
}
