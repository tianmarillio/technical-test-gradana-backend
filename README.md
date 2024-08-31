# Technical Test Gradana - Backend

## Setup

> Prequisite: Node v16+

- Copy .env file from .env.example manually, or run command:

```
cp .env.example .env
```

- Fill out the database config, port, and jwt secret on the .env file

```
<!-- example -->
<!-- mongodb database will be provided via email -->
PORT=3000
DATABASE_URL=mongodb://localhost:27017
DATABASE_NAME=technical_test_gradana
JWT_SECRET=example_secret_key
```

- Install dependencies with command:

```
npm i
```

- Run the app in the development environment:

```
npm run dev
```

## API Documentation

https://documenter.getpostman.com/view/15537853/2sAXjM2qkG
