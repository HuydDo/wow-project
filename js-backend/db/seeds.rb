# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'securerandom'
require 'rest-client'

 
# Player.delete_all
# Character.delete_all
 
# players_name = [
#   'Natalie',
#   'Prince',
#   'Dick',
#   'Rachel',
#   'Garry',
#   'Jason',
#   'Matt',
#   'Niky',
#   'Ashley'
# ]
 
# player_collection = []
 
# players_name.each do |name|
#   player_collection << Player.create(name: name)
# end
 
# player_collection.each do |player|
#   team_size = (SecureRandom.random_number(6) + 1).floor
 
#   (1..team_size).each do |character|
#     name = Faker::Name.first_name
#     species = Faker::Games::Pokemon.name
#     Character.create(name: name, species: species, player_id: player.id)
#   end
# end


Player.delete_all
Character.delete_all

# access_token = curl -u {5812eedc42df48bcb7321ec72444b30a}:{NoQZtTr7zX30Qvb0Uf39dyqn6eVt2FOX} -d grant_type=client_credentials https://us.battle.net/oauth/token
# curl -H "Authorization: Bearer {access_token}" https://us.api.blizzard.com/data/wow/token/?namespace=dynamic-us

# rm = RestClient.get 'https://us.api.blizzard.com/wow/data/character/races?locale=en_US&access_token=UStMYx4fvaVavwzwEpk2uC5azUbDAxi3Td'
# # byebug
# rm_array = JSON.parse(rm)["races"]
# rm_array.each do |character| 
#   Character.create(
#     race: character["name"]
#   )
# end



Player.create([{name: 'Aladea'},{name: 'Niterider'},{name: 'Moon'}])


Character.create([
  {gender: 'Female', name: 'Aladea', race: 'Night Elf', character_class: 'Demon Hunter', player_id: Player.all[0].id},
  {gender: 'Male', name: 'Niterider', race: 'Night Elf', character_class: 'Warrior', player_id: Player.all[1].id},
  {gender: 'Female', name: 'Moon', race: 'Void Elf', character_class: 'Warlock', player_id: Player.all[2].id}
])