import React from "react";
import {createRoot} from "react-dom/client";
import {Button, DatePicker, Divider, Space, version} from "antd";
import 'antd/dist/reset.css'
import "./index.css";

const App = () => {
    return (
        <div class="App">
            <h1>antd version: {version}</h1>
            <Space>
                <DatePicker />
                <Button type="primary">Primary Button</Button>
            </Space>
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App/>);
