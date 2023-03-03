# My approach to Clean Architecture with Nuxt3 + Pinia

This is a simple application made with [Vue3](https://vuejs.org/) + [Nuxt3](https://nuxt.com) + [Pinia](https://pinia.vuejs.org/) reflecting my opinionated a approach towards a Clean Architecture. The idea would be to separate the entire business logic from the framework and the state so we don't create a dependency if we want to change the approach or the framework in the future.

The application itself is a simple page with a list of profiles obtained from a mock api, which are stored in localStorage. If we access to the detail of a profile, it will give us the opportunity to edit the name of that model. As the application persists the changes in localStorage, if we refresh the page it will keep the new names. 
## What's inside?

This monorepo uses [pnpm](https://pnpm.io) and [turborepo](https://turbo.build/). It includes the following packages/apps:

### Apps

- `frontend`: a [Nuxt3](https://nuxt.com) app
- `backend`: mock server of json file

### Packages
- `ui`: a stub Vue component library shared by `frontend` application
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `stylelint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)

### Installation

To install the repository for the first time, run the following command:

```
pnpm install
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```

### Tests

There are some tests performed by [vitest](https://vitest.dev/), you can make them run by the following command:

```
pnpm run test
pnpm run test:watch
```
