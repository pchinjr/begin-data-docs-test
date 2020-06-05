let data = require('@begin/data')
let arc = require('@architect/functions')

async function startUpScript() {
  let table = 'greetings'
  let key = 'Japanese'
  let greeting = `Kon'nichiwa`
  await data.set({table, key, greeting})
  
}

module.exports = startUpScript