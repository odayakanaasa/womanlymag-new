# Womanly Mag

[![Greenkeeper badge](https://badges.greenkeeper.io/rfarine/womanlymag-new.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/rfarine/womanlymag-new.svg?branch=master)](https://travis-ci.org/rfarine/womanlymag-new)

## Setup

1) Clone this repo!

2) Install Yarn: `npm install yarn --global`

3) Create a `.env` file in the root directory and grab your environment variables from a fellow dev. All variables included in `.env.example` are required. Staging/production builds will fail if these environment variables are not included in Netlify. So, if you ever add a required environment variable, make sure you add it to Netlify!

## Develop

Run `yarn develop`.

Visit `http://localhost:8000/`.

If you'd like to see the GraphQL schema, check out `http://localhost:8000/___graphql`.

## Code Quality

When committing code, we use [Husky](https://github.com/typicode/husky) pre-commit hooks to run:
1) `yarn lint` to lint our code (see "ESLint" section below)
2) `yarn format` (see "Prettier" section below)
3) `yarn test` to run all tests (see "Jest" section below)

### ESLint

We use [ESLint](https://eslint.org/) to adhere to certain code style guidelines. We're extending [Airbnb's ESLint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

### Prettier

We use [Prettier](https://github.com/prettier/prettier) to create consistently formatted code. As mentioned above, it's automatically run when committing, but if you're curious and want to see it in action, run `yarn format`.

### Jest & Enzyme

We use [Jest](https://facebook.github.io/jest/) as our testing framework and [Enzyme](http://airbnb.io/enzyme/index.html) as our testing utility.

When developing, it's best to run `yarn tdd` (continuous test runs) in one pane alongside your dev server. TDD, babay. Make sure to keep writing tests as you add components/pages.

### Greenkeeper

We use [Greenkeeper.io](https://greenkeeper.io/) to manage our out-of-date dependencies. When Greenkeeper finds a dependency that's out of date, it automatically creates a PR that updates it. Pretty cool, huh?

## Deploy to Staging

Coming soon.

## Deploy to Production

Coming soon.
