# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# rake song:database -- use this as a template to run all rake tasks.  


# When starting fresh, run: 
# rake db:drop && rake db:create && rake db:migrate, rake db:seed
# the blow files will be seeded

require 'rake'

# Rails.application.load_tasks


# all rake tasks:
  
  Rake::Task['books:database'].invoke
  Rake::Task['curriculum:database'].invoke
  Rake::Task['dictionary:database'].invoke
  Rake::Task['erinarpet:database'].invoke
  Rake::Task['game:database'].invoke
  Rake::Task['material:database'].invoke
  Rake::Task['poster:database'].invoke
  Rake::Task['song:database'].invoke
