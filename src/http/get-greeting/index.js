let data = require('@begin/data')
let arc = require('@architect/functions')

async function http(req) {
  // example of getting a single document
  // db was populated with /scripts/sandbox-startup.js
  let table = 'greetings'
  let key = 'Japanese'
  let hello = await data.get({table, key})

  return {
    type: 'text/html; charset=utf8',
    "body": `"Hello" in ${key} is: ${JSON.stringify(hello.greeting)}!`
  }
}

exports.handler = arc.http.async(http)