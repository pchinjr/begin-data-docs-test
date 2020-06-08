
let data = require('@begin/data')
let arc = require('@architect/functions')

async function http(req) {
  // example of getting a single document
  // db was populated with /scripts/sandbox-startup.js
  // let table = 'greetings'
  // let greetings = await data.get([
  //   {table, key: 'Māori'},
  //   {table, key: 'Swahili'},
  //   {table, key: 'Japanese'},
  // ])

  //get whole table
  let table = 'greetings'
  let greetings = await data.get({table})
  console.log(greetings)
  let cursor = greetings.cursor
  let nextPage = await data.get({table, cursor: cursor})
  console.log(nextPage)


  return {
    type: 'text/html; charset=utf8',
    "body": `"Hello" is: ${JSON.stringify(greetings)}!`
  }
}

exports.handler = arc.http.async(http)