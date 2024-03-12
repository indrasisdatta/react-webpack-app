# React Webpack app

Simple app created using custom Webpack configuration. [React Webpack example](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Creates a production build.\

# Webpack configuration steps

1. Install webpack dependencies.\
   `npm i -D webpack webpack-dev-server webpack-cli`\

2. Install Babel.\
   `npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader`\

3. Install style loader, css loader and html webpack plugin.\
   `npm i -D style-loader css-loader html-webpack-plugin `\

4. Create `.babelrc` file.\

5. Create Webpack config files `webpack.dev.config.js` and `webpack.prod.config.js`.\

6. Update `package.json` scripts for start and build commands.
