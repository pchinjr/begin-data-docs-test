let data = require('@begin/data')
let arc = require('@architect/functions')

async function startUpScript() {
  let table = 'greetings'
  let greetings = [
    { table, key: 'Māori', greeting: `Kia ora` },
    { table, key: 'Swahili', greeting: `Hujambo` },
    { table, key: 'Japanese', greeting: `Kon'nichiwa` } ]
  await data.set(greetings)
  
}

module.exports = startUpScript