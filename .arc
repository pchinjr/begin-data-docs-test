@app
begin-data-test

@http
get /
get /greeting
get /greetings
post /greeting
post /greeting/delete

@tables
data
  scopeID *String
  dataID **String
  ttl TTL