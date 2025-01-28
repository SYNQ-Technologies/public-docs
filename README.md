# SYNQ Public Documentation Website

This project provides SYNQ's public documentation hosted on https://docs.synqtech.com.

This website is built using [Docusaurus](https://docusaurus.io/).

### Installation

```
$ npm i
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This repo uses GitHub Actions to automatically build and deploy to GitHub pages for hosting. Any push to the `main` branch will trigger a deploy.
