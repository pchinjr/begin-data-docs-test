let data = require('@begin/data')

exports.handler = async function http(req) {
  let table = 'greetings'
  let key = 'Japanese'
  let hello = await data.get({table, key})

  return {
    headers: {
      "content-type": 'text/html; charset=utf8',
    }, 
    "body": `"Hello" in ${key} is: ${JSON.stringify(hello.greeting)}!`
  }
}