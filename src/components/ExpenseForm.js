import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const expenseFormData = {
            name:enteredName,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };

        console.log(expenseFormData);
    }

    return (
        <div>
            {/* expense form component */}
            <form className="form-holder" onSubmit={onSubmitHandler}>
                <div className="expense-form-container">
                    <div>
                        <label className="expense-label">Name</label>
                        <input className="expense-input" type="text" placeholder="groceries" onChange={nameChangeHandler} />
                    </div>
                    <div>
                        <label className="expense-label">Amount</label>
                        <input className="expense-input" min='0.01' step='0.01' type="number" placeholder="10 EUR" onChange={amountChangeHandler} />
                    </div>
                    <div>
                        <label className="expense-label">Date</label>
                        <input className="expense-input" type="date" onChange={dateChangeHandler} />
                    </div>
                </div>
                <div style={{ textAlign : 'right' }}>
                    <button className="expense-btn" type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;