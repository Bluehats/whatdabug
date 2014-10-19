require 'rest_client'
require 'yaml'
require 'rack/utils'

headers = {}
headers['X-Parse-Application-Id'] = 'ClD5oh3fnQEazfTo0krsLVi4jzuaEVFa28tNRQX3'
headers['X-Parse-REST-API-Key'] = 'zPaPA3CDIbijSGxPg62yqGxCDZFlukhNR78x3oIy'
headers['Content-Type'] = 'application/json'
headers['accept'] = 'json'
url = 'https://api.parse.com/1/classes/Bug'

languages = Dir.entries('snippets')[2..-1]
languages.each do |language|
  files = Dir.entries("snippets/#{language}")[2..-1]
  files.each_slice(2) do |file_array|
    object = {}
    if file_array[0].match(/yml/)
      object = (YAML.load(File.read("snippets/#{language}/#{file_array[0]}")))
      object['code'] = Rack::Utils.escape_html(File.read("snippets/#{language}/#{file_array[1]}"))
    else
      object = (YAML.load(File.read("snippets/#{language}/#{file_array[1]}")))
      object['code'] = Rack::Utils.escape_html(File.read("snippets/#{language}/#{file_array[0]}"))
    end
    object['language'] = language
    puts object.to_json
    response = RestClient.post(url, object.to_json, headers)

  end
end
