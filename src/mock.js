const Mock = require('mockjs')

const Random = Mock.Random

const produceNewsData = function () {
  const articles = []

  for (let i = 0; i < 10; i++) {
    const newArticleObject = {
      title: Random.csentence(5, 30),
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
      author_name: Random.cname(),
      date: Random.date() + ' ' + Random.time()
    }

    articles.push(newArticleObject)
  }

  return {
    articles: articles
  }
}

Mock.mock('/api/news/index', 'get', produceNewsData)
