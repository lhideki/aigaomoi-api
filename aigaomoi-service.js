import { Client } from 'node-rest-client'
import Config from './config'

const config = new Config()

export default class AigaomoiService {
  _callApi(method = 'get', url, originalArgs = null, extractor = null) {
    const client = new Client()

    if (originalArgs !== null && originalArgs.hasOwnProperty('parameters')) {
      originalArgs.parameters['key'] = config.apiKey()
    } else {
      originalArgs['parameters'] = {
        key: config.apiKey()
      }
    }

    const args = Object.assign(originalArgs, {
      headers: {
        'Content-type': 'application/json'
      }
    })

    const promise = new Promise(
      function(resolve, reject) {
        let req = null

        switch (method) {
          case 'get':
            req = client.get(url, args, (data, res) => {
              if (res.statusCode !== 200) {
                reject(res.statusCode)

                return
              }
              const result = extractor !== null ? extractor(data) : data
              resolve(result)
            })
            break;
          case 'post':
            req = client.post(url, args, (data, res) => {
              if (res.statusCode !== 200) {
                reject(res.statusCode)

                return
              }
              const result = extractor !== null ? extractor(data) : data
              resolve(result)
            })
            break;
        }
        if (req) {
          req.on('error', (error) => reject(error))
        }
      }
    )

    return promise
  }

  translationByGoogle(text) {
    const url = 'https://www.googleapis.com/language/translate/v2'
    const args = {
      parameters: {
        q: text,
        target: 'en'
      }
    }
    const extractor = (data) => {
      return data.data.translations[0].translatedText
    }

    return this._callApi('get', url, args, extractor)
  }

  emotioncheckByGoogle(text) {
    const url = 'https://language.googleapis.com/v1/documents:analyzeSentiment'
    const args = {
      data: JSON.stringify({
        document: {
          language: 'en',
          type: 'PLAIN_TEXT',
          content: text
        }
      })
    }
    const extractor = (data) => {
      const doc = data.documentSentiment
      return {
        magnitude: doc.magnitude,
        score: doc.score
      }
    }

    return this._callApi('post', url, args, extractor)
  }

  emotioncheck(text) {
    return this.translationByGoogle(text).then(translatedText => {
      return this.emotioncheckByGoogle(translatedText)
    })
  }
}