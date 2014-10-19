require 'rest_client'
require 'yaml'
require 'rack/utils'
require 'json'

headers = {}
headers['X-Parse-Application-Id'] = 'ClD5oh3fnQEazfTo0krsLVi4jzuaEVFa28tNRQX3'
headers['X-Parse-REST-API-Key'] = 'zPaPA3CDIbijSGxPg62yqGxCDZFlukhNR78x3oIy'
headers['Content-Type'] = 'application/json'
headers['accept'] = 'json'
url = 'https://api.parse.com/1/classes/Bug'
used_filenames = []
JSON.parse(RestClient.get(url, headers))['results'].each do |bug|
  used_filenames << bug['filename']
end

def process_html(html)
  Rack::Utils.escape_html(html).split("\n").map do |line|
    '<tr><td>' + line + '</td></tr>'
  end.reduce(:+).gsub(' ', '&nbsp;').gsub('\t', '&nbsp;&nbsp;')
end

languages = Dir.entries('snippets').delete_if { |s| s.match(/^\..*/) }

languages.each do |language|
  puts "Parsing language #{language} "
  files = Dir.entries("snippets/#{language}").delete_if { |s| s.match(/^\..*/) }
  files.each_slice(2) do |file_array|
    if used_filenames.include?(file_array[0]) || used_filenames.include?(file_array[1])
      print 'skip'
    else
      print '..'
      object = {}
      if file_array[0].match(/yml/)
        object = (YAML.load(File.read("snippets/#{language}/#{file_array[0]}")))
        object['code'] = process_html(File.read("snippets/#{language}/#{file_array[1]}"))
        object['filename'] = "#{file_array[1]}"
      else
        object = (YAML.load(File.read("snippets/#{language}/#{file_array[1]}")))
        object['code'] = process_html(File.read("snippets/#{language}/#{file_array[0]}"))
        object['filename'] = "#{file_array[0]}"
      end
      object['language'] = language
      RestClient.post(url, object.to_json, headers)
    end
  end
  puts ''
end
