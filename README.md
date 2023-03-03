# My approach to Clean Architecture with Nuxt3 + Pinia

This is simple application made with [Vue3](https://vuejs.org/) + [Nuxt3](https://nuxt.com) + [Pinia](https://pinia.vuejs.org/) using my custom approach to Clean Architecture. The idea behind it's to separate all the business logic of our application from the framework or state management libraries. Whit this way we don't depend on them if in the future we decide to change to a different library or framework.

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
