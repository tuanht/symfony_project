# symfony_project [![Build Status](https://travis-ci.org/tuanht/symfony_project.svg?branch=master)](https://travis-ci.org/tuanht/symfony_project)
A simple Symfony 3.0 project, with following included:
- Docker (`docker-compose`) for setup development environment.
- Travis CI.
- Heroku.

# Travis
Setting 2 following environment variables in Travis to automatically deploy to Heroku:
- `HEROKU_API_KEY`: Heroku's authorization token/API key.
- `HEROKU_APP_NAME`: Heroku's app name.

# Speedup Docker
:warning: Mac OS X only

[Docker Machine NFS](https://github.com/adlogix/docker-machine-nfs) help activate NFS for an existing boot2docker box created through Docker Machine.
```sh
$ brew install docker-machine-nfs
$ docker-machine-nfs default --mount-opts="nolock,vers=3,udp,noatime"
```
