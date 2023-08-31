# How to create a project from 0 to 1

## Overview steps

1. Initialize Project
    ```txt
    Start by creating a new project directory and navigate to it in your terminal
    ```
2. Initialize `package.json`: 
    ```bash
    npm init -y
    ```
3. Install Dependencies
    ```bash
    npm install react react-dom react-scripts
    ```
    ```json
    // Example package.json file
    {
        "name": "antd-js",
        "version": "1.0.0",
        "description": "",
        "dependencies": {
            "react-dom": "^18.2.0",
            "react": "^18.2.0",
            "react-scripts": "5.0.1",
            "dayjs": "latest",
            "antd": "^5.8.5"
        },
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        },
        "keywords": [],
        "author": "Shimin",
        "license": "ISC"
    }
    ```
4. Create HTML and JavaScript Files
    ```txt
    Create an HTML file (e.g., `index.html`) and a JavaScript file (e.g., `index.js`) in your project directory 

    Folder Structure as below:
    ==========================
    > public
        index.html
    > src
        index.css
        index.js
    package-lock.json
    package.json
    ==========================
    ```
5. Write React Code
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';

    const App = () => {
        return <h1>Hello, React!</h1>;
    };

    ReactDOM.render(<App/>, document.getElementById('root'));
    ```
6. Bundling
    ```txt
    If you're using modern JavaScript features(ES6+), you'll need to transpile and bundle your code for compatibility with various browsers. For this purpose, you can use tools like Webpack and Babel.
    ```
7. Run the Application
    ```txt
    npm start
    ```

> If you're looking for a more automated and streamlined setup, you might consider using `create-react-app`, which is a popular tool for bootstrapping React applications. It handles a lot of the configuration and setup process for you, allowing you to start coding your app right away.
