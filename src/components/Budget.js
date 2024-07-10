import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch} = useContext(AppContext);

    const { budget, expenses, currency } = useContext(AppContext);
    // const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudget = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        },0);

        if(newBudget > 20000) {
            alert("The budget cannot exceeds the funds of 20000");
            return;
        }

        if(newBudget < totalExpenses) {
            alert("The new budget cannot be less than the amount spent so far.");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
