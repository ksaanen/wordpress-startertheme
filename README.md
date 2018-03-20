# wordpress-startertheme
This is a basic WordPress theme build on React and WordPress REST API.

## Theme features:
- TypeScript
- SCSS/SASS
- Bootstrap 4
- Webpack

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