# React Webpack app

Simple app created using custom Webpack configuration. [React Webpack example](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/).

[Webpack Tutorial](https://www.youtube.com/watch?v=LyxCWXOq4uQ&list=PLolI8AY2AS9ZHVcFVrmBHsaPXhz30W00A)

## Available Scripts

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Creates a production build.

## Webpack basic setup and configuration steps

1. Install webpack dependencies.
   `npm i -D webpack webpack-dev-server webpack-cli`

2. Install Babel.\
   `npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader`

3. Install style loader, css loader and html webpack plugin.
   `npm i -D style-loader css-loader html-webpack-plugin `\

4. Create `.babelrc` file.\

5. Create Webpack config files `webpack.dev.config.js` and `webpack.prod.config.js`.

6. Update `package.json` scripts for start and build commands.

## Tailwind CSS setup steps

1. Tailwind css dependencies\
   `npm i -D postcss postcss-loader tailwindcss`\
   `npx tailwindcss init`

2. Tailwind css configuration\
   `postcss.config.js`
   `tailwind.config.js`
   `globals.css`
   `index.js` - import globals.css

## Webpack optimization

1. Common `webpack.config.js` file. Use `webpack-merge` to merge common config with additional config.\

2. `BundleAnalyzerPlugin` - analyze module bundle size.\

3. `CleanWebpackPlugin` - clean build folder.\
