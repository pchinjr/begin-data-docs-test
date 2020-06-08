let data = require('@begin/data')
let arc = require('@architect/functions')


exports.handler = async function http (req) {
  let table = 'greetings'
  let { key, greeting } = arc.http.helpers.bodyParser(req)
  console.log(key, greeting)
  await data.set({table, key, greeting})
  return { }
}