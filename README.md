# wordpress-startertheme
Base environment for creating a WordPress theme

This theme uses automattic's _s (underscores theme) as a base with bootstrap 4 on top.

## Theme features:
- TypeScript support
- SCSS/SASS support
- Bootstrap 4 theme
- _s (underscores) as WP template base
- Webpack setup for building

## Usage:
First run the following command from the project root directory to get all dependencies.
```console
npm install
```
## Dev environment
The dev environment can be used to work on the theme from the webpack-dev-server option. This way when .SCSS or .TS files get modified. Webpack wil recompile these files immediately.
### Start dev environment:
```console
npm run start:dev
```
## Build theme
To make a release/build from this branch you can type the command below and look for the result in the dist folder.
### Build template assets:
```console
npm run build
```