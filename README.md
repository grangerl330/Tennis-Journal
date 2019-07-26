# Tennis Journal README

Tennis Journal is an app designed to help tennis players that are competing in tournaments keep track of match statistics

## Running the App

This application is currently run on your local host

Please fork and clone this repo then run:

$ bundle install

and

$ rake db:create && rake db:migrate

To start the servers on your local machine, run:

$ rake start

This will run the app in the development mode

Open http://localhost:3000 to view it in your browser

Shut down the server by pressing ctrl + C

If you have issues you may need to install the React front end before starting the server. To do this, run the following:

$ cd client  
$ npm install  
$ cd ..  
$ rake start  

## Development

The front end for this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

To learn more, read the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

After starting this app, you can run `rails c` for an interactive prompt that will allow you to experiment with the Rails back end.

The page will reload if you make edits on the front end in the client folder.
You will also see any lint errors in the console.

## Code of Conduct

Everyone interacting in the Tennis Journal project’s codebases, issue trackers, chat rooms and mailing lists are expected to follow the [Contributor Covenant](http://contributor-covenant.org) code of conduct.
