# Model Management front end challenge

Please read the following instructions carefully.

**Your goal is to set up a simple application which enables the user to view and edit models.**

# Scenario

In our intranet we want to be able to quickly view models and edit their names.

- The user shall be able to:
  - See models in pages of 20 models per page (just show avatar and name).
  - View the models information on a separate model details page
  - Update the models name (should persist when the page is reloaded)

The interactions should not refresh the page.

Extras if you have time

- Search by model name
- Sort by name in ascending/descending order

## Technology requirements

**Vue** is a mandatory requirement.

Typescript is recommended but optional.

Nuxt is recommended but optional.

Apart from this you can use any libraries, task runners and build processors.

Design/CSS framework is up to you.

# Setup

- Download a copy of this repository.
- A RESTful API for `models` is provided with the challenge. To run, follow: [How to run API server](#how-to-run-api-server)
- Make sure that there are scripts to start both the server and the client.
- Provide a a link to your finished solution on Github/Bitbucket with a readme for any setup/installation instructions. Alternatively an emailed zip is also acceptable.

# How to run API server

The repo includes a small service for data fetching. The file `db.json` includes some test data (all fake). Please follow the steps below to start the server:

```
yarn or npm install .
yarn server or npm run server
```

Check [json-server](https://github.com/typicode/json-server) for documentation.

# Time limit

There is no hard time limit for this coding challenge, however we recommended spending max a few hours on this. We appreciate all the effort put into the challenge, we also do not want to take up too much of your time!

Good luck,
ModelManagement.com
