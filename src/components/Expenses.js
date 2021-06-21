import React from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';

const Expenses = (props) => {

    return (
        <div>
            <div className="filter-form-holder">
                <p>Expenses</p>
                <ExpenseFilter />
            </div>

            {/* {expenseData.map(exp => {
            <ExpenseItem expData={exp.expenseData}/>
        })} */}
            <ExpenseItem title={props.expenseData[0].title} date={props.expenseData[0].date} cost={props.expenseData[0].cost} />
            <ExpenseItem title={props.expenseData[1].title} date={props.expenseData[1].date} cost={props.expenseData[1].cost} />
            <ExpenseItem title={props.expenseData[2].title} date={props.expenseData[2].date} cost={props.expenseData[2].cost} />
        </div>
    )
}

export default Expenses;