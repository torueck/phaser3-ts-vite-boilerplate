# Phaser 3 + TypeScript + Vite Boilerplate

This is a [Phaser 3](https://github.com/photonstorm/phaser) starter with [TypeScript](https://www.typescriptlang.org/), [Rollup](https://rollupjs.org) with ⚡️ lightning fast HMR through [Vite](https://vitejs.dev/).

> This boilerplate is an extension of <https://github.com/geocine/phaser3-rollup-typescript>.

The boilerplate includes

- [ESLint](https://eslint.org/) for linting
- [Prettier](https://github.com/prettier/prettier) for auto-formatting.

It uses [husky](https://github.com/typicode/husky) to lint staged files (with help of [lint-staged](https://github.com/okonet/lint-staged)) before commit and lint the commit message to adhere to [conventional commits](https://www.conventionalcommits.org).

## Use the Boilerplate

You can simply clone the repo. However, another great option is to use [degit](https://github.com/Rich-Harris/degit), a tool that makes scaffolding easy. I use the [community drriven fork](https://github.com/tiged/tiged).

After installing degit (or tigit) globally you can simply create a clone of this boilerplate with:

```sh
degit https://github.com/torueck/phaser3-ts-vite-boilerplate my-project-name
```

## Available Commands

| Command           | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| `yarn install`    | Install project dependencies                                    |
| `yarn dev`        | Builds project and starts dev server with fast HMA through vite |
| `yarn build`      | Builds code bundle with production settings                     |
| `yarn serve`      | Run a web server to serve production built code bundle          |
| `yarn lint`       | Lint the code using ESLint                                      |
| `yarn lint:fix`   | Lint the code using ESLint and fix issues if possible           |
| `yarn type-check` | Type-check the code using the TypeScript transpiler             |

## Development

After cloning the repo, run `yarn install` from your project directory. Then, you can start the local development
server by running `yarn dev` and navigate to <http://localhost:3000>.

## Production

After running `yarn build`, the files you need for production will be on the `dist` folder. To test code on your `dist` folder, run `yarn serve` and navigate to <http://localhost:5000>
