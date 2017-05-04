import AigaomoiService from './aigaomoi-service'

const service = new AigaomoiService();

const errorHandler = (error) => {
  console.error(error, 'hohgohoge')

  return {
    statusCode: error,
    headers: {
        'Access-Control-Allow-Origin': '*'
      },
    body: JSON.stringify({ message: 'Failed', error: error })
  }
}

export const echo = (event, context, callback) => {
  console.log(event.queryStringParameters)

  callback(null, {
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': '*'
      },
    body: JSON.stringify({
      result: event.queryStringParameters,
    }),
  })
}

export const translationByGoogle = (event, context, callback) => {
  const text = JSON.parse(event.body).text

  service.translationByGoogle(text).then(result => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        translated: result
      })
    })
  }).catch(error => {
    callback(null, errorHandler(error))
  })
}

export const emotioncheckByGoogle = (event, context, callback) => {
  const text = JSON.parse(event.body).text

  service.emotioncheckByGoogle(text).then(result => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        magnitude: result.magnitude,
        score: result.score
      })
    })
  }).catch(error => {
    callback(null, errorHandler(error))
  })
}

export const emotioncheck = (event, context, callback) => {
  const text = JSON.parse(event.body).text
  // TODO dummy
  /*
  let score = Math.random() * (1 - (-1)) + (-1)

  score *= 100
  score = Math.round(score)
  score /= 100

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      magnitude: score,
      score: score
    })
  })
  */

  service.emotioncheck(text).then(result => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        magnitude: result.magnitude,
        score: result.score
      })
    })
  }).catch(error => {
    callback(null, errorHandler(error))
  })
}
