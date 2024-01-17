import React, { useState } from 'react'
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSum, increment, decrement, incrementByAmount, incrementIfOdd, incrementAsync } from '../../../../redux/sum/sumSlice.js';

export default function Counter() {
    let count = useSelector(selectSum)
    let [incrementAmount, setIncrementAmount] = useState(2);
    let dispatch = useDispatch();

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement(1))}
                >
                    -
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment(1))}
                >
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(+e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(incrementAmount))}
                >
                    Add Amount
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementIfOdd(incrementAmount))}
                >
                    Add If Odd
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(incrementAmount))}
                >
                    Add Async
                </button>
            </div>
        </div>
    )
}
