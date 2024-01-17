import React from 'react'
import Counter from './Counter'
import logo from '../../../logo.svg';
import './index.css'
import { useSelector } from 'react-redux';
import { selectSum } from '../../../redux/sum/sumSlice'

export default function ReduxTest() {
    let count = useSelector(selectSum)

    return (
        <div className="ReduxDemo">
            <header className="ReduxDemo-header">
                <img src={logo} className="ReduxDemo-logo" alt="logo" />
                <h1>{count}</h1>
                <Counter />
            </header>
        </div>
    )
}
