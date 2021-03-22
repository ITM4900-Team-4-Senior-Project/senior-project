# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, begin with:

### `npm install`
Installs the project and its dependencies.

With the project install, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Project Structure

```
├── package-lock.json
├── package.json
├── public
│   ├── images
│   ├── index.html
│   ├── robots.txt
│   └── site.webmanifest
└── src
    ├── App.css
    ├── App.js
    ├── components
    │   ├── Brand
    │   │   └── index.js
    │   ├── Footer
    │   │   └── index.js
    │   └── Navigation
    │       └── index.js
    ├── index.js
    └── pages
        ├── 404-page-not-found.js
        ├── about.js
        ├── contact.js
        ├── home.js
        └── how-it-works.js
```
There are two main folders `public` and `src`. `src` is were all of the development happens. `public`, as the name suggests, is where public resources are housed or compiled.

`index.js`, within `src`, works as the entry point of the application. It uses ReactDOM.render to render App and gets the project started. App in turn models the base template for future pages.

`src/components` is used to organize components used through the application. Having an `index.js` file under each component allows us to target just the directory in imports.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn React-Bootstrap, check ou the [React-Bootstrap Documentation](https://react-bootstrap.github.io/).