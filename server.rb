require 'sinatra'

set :port, 4567

set :public_folder, File.dirname(__FILE__) + '/app'

get '/' do
  File.read(File.join('app', 'index.html'))
end