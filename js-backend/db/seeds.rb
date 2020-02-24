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
 

Player.delete_all
Character.delete_all

Player.create([{name: 'James'},{name: 'Jack'},{name: 'Marry'}])


Character.create([
  {gender: 'Female', name: 'Aladea', race: 'Night Elf', character_class: 'Demon Hunter', player_id: Player.all[0].id},
  {gender: 'Female', name: 'Ocean', race: 'Night Elf', character_class: 'Priest', player_id: Player.all[0].id},
  {gender: 'Male', name: 'Niterider', race: 'Night Elf', character_class: 'Warrior', player_id: Player.all[1].id},
  {gender: 'Female', name: 'Moon', race: 'Void Elf', character_class: 'Warlock', player_id: Player.all[2].id}
])