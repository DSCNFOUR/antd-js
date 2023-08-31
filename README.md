# How to create a project from 0 to 1

## Initialize Project

1. Create Project folder
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

## Add react-router-dom

Basic Requirements: I want to have two components as `home` and `about`
- Original directory:
    ```txt
    my-react-app/
    ├── src/
    │    ├── index.css
    │    ├── index.js
    ├── public/
    │    ├── index.html
    ```
- Updated directory:
    ```txt
    my-react-app/
    ├── src/
    │    ├── About.js
    │    ├── App.js
    │    ├── Home.js
    │    ├── index.css
    │    ├── index.js
    ├── public/
    │    ├── index.html
    ```

1. Install Dependencies
    ```bash
    # Make sure you have the `react-router-dom` version 6 installed:
    npm install react-router-dom@6
    ```
2. Create Components
    Create `Home.js` and `About.js` components in your `src` directory
    ```jsx
    // Home.js
    import React from 'react';
    import { Button, DatePicker, Space, version } from "antd";

    function Home() {
        return (
            <div>
                <h1>Home Page</h1>
                <p>Welcome to the home page of our app!</p>
                <h2>antd version: {version}</h2>
                <Space>
                    <DatePicker />
                    <Button type="primary">Primary Button</Button>
                </Space>
            </div>
        );
    }

    export default Home;
    ```
    ```jsx
    // About.js
    import React from 'react';

    function About() {
        return (
            <div>
                <h1>About Us</h1>
                <p>This is the about page content.</p>
            </div>
        );
    }

    export default About;
    ```
3. Create `App.js` for Routing - **Main Application Component**
    ```jsx
    import React from 'react';
    import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
    import Home from './Home';
    import About from './About';

    function App() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        );
    }

    export default App;
    ```
4. `index.js` - Entry Point
    Modify your `index.js` to import and render the `App` component instead of rendering individual components directly:
    ```jsx
    import React from "react";
    import {createRoot} from "react-dom/client";
    import 'antd/dist/reset.css'
    import "./index.css";
    import App from './App'

    const root = createRoot(document.getElementById("root"));
    root.render(<App/>);
    ```
