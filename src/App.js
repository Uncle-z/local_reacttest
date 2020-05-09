import React from 'react';
import logo from './logo.svg';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
    </div>
  );
}

export default App;
