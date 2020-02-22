# Wow App
This JS and Rail app will help the player to show/create new character(s).  
It can create new player if the player is not exists.

## Prerequisites
The setups steps expect following tools installed on the system.

  Github
  Ruby 2.6.1
  Rails 6.0.1

  Check your Ruby version
  `ruby -v`
  The ouput should start with something like ruby 2.6.1
  
  If not, install the right ruby version using rbenv

  ```rbenv install 2.5.1```

  Check your Rails version
  `rails -v`
  The ouput should start with something like 
  Rails 6.0.1

  Check your Yarn version
  `yarn -v`
  The ouput should start with something like
  1.19.2
  
    
## Installation 
1. Check out the repository
   `git clone git@github.com:HuydDo/wow-project.git`

   Change dir to 
   
   `cd wow-project`

    `cd js-backend`

2. Install the gems required by the applications
   `bundle install`

3. Start the Rails server
   You can start the rails server using the command given below.

   `bundle exec rails s` or `rails s`
   View index.html file in the browser
  You can visit the site with the URLs below to view the JSON 
    http://localhost:3000/api/v1/characters;
    http://localhost:3000/api/v1/players 

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/HuydDo/wow-project. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).