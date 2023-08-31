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