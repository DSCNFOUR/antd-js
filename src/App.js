// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomLayout from './components/Layout';
import Home from './components/Home';
import Info from './components/Info';

function App() {

    return (
        <Router>
            <CustomLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/info" element={<Info />} />
                </Routes>
            </CustomLayout>
        </Router>
    );
}
export default App;
