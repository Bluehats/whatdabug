#!/usr/bin/env ruby

require 'rest_client'
require 'yaml'
require 'rack/utils'
require 'json'

# Set parse headers
headers = {}
headers['X-Parse-Application-Id'] = 'ClD5oh3fnQEazfTo0krsLVi4jzuaEVFa28tNRQX3'
headers['X-Parse-REST-API-Key'] = 'zPaPA3CDIbijSGxPg62yqGxCDZFlukhNR78x3oIy'
headers['Content-Type'] = 'application/json'
headers['accept'] = 'json'
url = 'https://api.parse.com/1/classes/Bug'

# Get already uploaded list of filenames
used_filenames = []
JSON.parse(RestClient.get(url, headers))['results'].each do |bug|
  used_filenames << bug['filename']
end

# Parses code in snippets and prepares them for html output
def process_html(html)
  Rack::Utils.escape_html(html).split("\n").map do |line|
    '<tr><td>' + line + '</td></tr>'
  end.reduce(:+).gsub(' ', '&nbsp;').gsub('\t', '&nbsp;&nbsp;')
end

# Read given file
def read_file(language, file)
  File.read("snippets/#{language}/#{file}")
end

# builds object to be sent to parse
def build_object(files, language)
  object = { 'language' => language }
  files.each do |file|
    if file.match(/yml/)
      object.merge!(YAML.load(read_file(language, file)))
    else
      object['filename'] = file
      object['code'] = process_html(read_file(language, file))
    end
  end
  object.to_json
end

# Get all languages on snippets folder
languages = Dir.entries('snippets').delete_if { |s| s.match(/^\..*/) }

languages.each do |language|
  puts "Parsing language #{language}"

  # Get all files for every language
  files = Dir.entries("snippets/#{language}").delete_if { |s| s.match(/^\..*/) }

  # Get every pair of files
  files.each_slice(2) do |file_array|
    if used_filenames.include?(file_array[0]) || used_filenames.include?(file_array[1])
      print 'S'
    else
      print '..'
      object = build_object(file_array, language)
      RestClient.post(url, object, headers) # Upload to parse.io!
    end
  end
  puts ''
end
