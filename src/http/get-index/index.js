exports.handler = async function http(req) {
  
  return {
    headers: {
      "content-type": 'text/html; charset=utf8',
    }, 
    "body": `praise cage this is the index route`
  }
}