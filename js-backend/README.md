# Wow App
This JS and Rail app is JS frontend SPA which use a Rail API.  It will be run in local dev environment.

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
   `cd js-backend`
   `cd wow-project`
   `bundle install`
   `rails db:create`
   `rails db:migrate`
   `rails db:seed [optional]`

2. Open `js-backend/index.html` in the browser
  You can visit the site with the URLs below to view the JSON data
    http://localhost:3000/api/v1/characters;
    http://localhost:3000/api/v1/players 


## Usage
  If you use seed file for database, you can login as user `James`, `Marry`, or `Josh`
## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/HuydDo/wow-project. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).