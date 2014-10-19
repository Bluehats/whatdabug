require 'rest_client'

# RestClient.proxy = 'http://127.0.0.1:8888/'
headers = {}
headers['X-Parse-Application-Id'] = 'ClD5oh3fnQEazfTo0krsLVi4jzuaEVFa28tNRQX3'
headers['X-Parse-REST-API-Key'] = 'zPaPA3CDIbijSGxPg62yqGxCDZFlukhNR78x3oIy'
headers['Content-Type'] = 'application/json'
headers['accept'] = 'json'

url = 'https://api.parse.com/1/classes/Bug'
object = {
  explanation: 'because what da bug',
  code: "puts 'the code'",
  bug_lines: '1,2',
  language: 'c++'
}.to_json

response = RestClient.post(url, object, headers)
puts response
