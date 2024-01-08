import React from 'react';
import logo from '../../../logo.svg';
import { Counter } from './Counter';
import './index.css';

function ReduxDemo() {
    return (
        <div className="ReduxDemo">
            <header className="ReduxDemo-header">
                <img src={logo} className="ReduxDemo-logo" alt="logo" />
                <Counter />
            </header>
        </div>
    );
}

export default ReduxDemo;
