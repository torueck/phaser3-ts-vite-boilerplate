# Phaser 3 + TypeScript + Vite Boilerplate

This is a [Phaser 3](https://github.com/photonstorm/phaser) starter with [TypeScript](https://www.typescriptlang.org/), [Rollup](https://rollupjs.org) with ⚡️ lightning fast HMR through [Vite](https://vitejs.dev/).

This boilerplate is an extension of <https://github.com/geocine/phaser3-rollup-typescript>.

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
