# CHANGEME-ms

## Description

Created using [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Features

- Adds basic configuration for linter, prettier, Github actions ...
- Exposes a healthcheck endpoint at `/health`
- Expects a request id passed through the header `X-REQUEST-ID`
- Uses [pino](https://getpino.io/) for logging 