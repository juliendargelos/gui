# rollup-library

[![test](https://github.com/juliendargelos/rollup-library/workflows/test/badge.svg?branch=master)](https://github.com/juliendargelos/rollup-library/actions?workflow=test)
[![build](https://github.com/juliendargelos/rollup-library/workflows/build/badge.svg?branch=master)](https://github.com/juliendargelos/rollup-library/actions?workflow=build)
[![version](https://img.shields.io/github/package-json/v/juliendargelos/rollup-library)](https://github.com/juliendargelos/rollup-library)

Library template for rollup and typescript, powered by github actions.

Dependencies always up to date thanks to [dependabot](https://dependabot.com).

### Usage

Click on <sub>[![Use this template](https://img.shields.io/badge/-Use%20this%20template-brightgreen)](https://github.com/juliendargelos/rollup-library/generate)</sub> then wait for the [initialize workflow](.github/workflows/initialize.yml) to complete. The package name and urls will be automatically replaced at initialization. You may want to change the author name in `package.json` and `LICENSE`.

### Features

#### Bundling

- Rollup, TypeScript, ESLint and Jest
- ESM, CJS and UMD bundles
- Path alias from tsconfig.json synced with rollup
- Development server with demo in watch mode
- Terser for browser and demo bundle

#### Continuous integration (Github Actions)

- Build and test on pull requests and push to master
- Build, test and publish to npm when a new version is pushed to master<br>
  *Requires `NODE_TOKEN` secret to be set as a [NPM authentication token](https://docs.npmjs.com/about-authentication-tokens).*
- Build demo and deploy to Github Pages on push to master<br>
  *Requires `PERSONAL_TOKEN` secret to be set as a [GitHub personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) with full `repo` scope.*

The [publish](.github/workflows/publish.yml.sample) and [demo](.github/workflows/demo.yml.sample) workflows are disabled by default, [add the required secrets](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) and remove the `.sample` suffix from the corresponding files to enable them.
