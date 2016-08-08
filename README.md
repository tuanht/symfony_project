# symfony_project [![Build Status](https://travis-ci.org/tuanht/symfony_project.svg?branch=master)](https://travis-ci.org/tuanht/symfony_project)
A simple Symfony 3.0 project, with following included:
- Docker (`docker-compose`) for setup development environment.
- Travis CI.
- Heroku.

# Travis
Setting 2 following environment variables in Travis to automatically deploy to Heroku:
- `HEROKU_API_KEY`: Heroku's authorization token/API key.
- `HEROKU_APP_NAME`: Heroku's app name.
