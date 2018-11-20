import axios from 'axios';
export const PENDING = 'PENDING';
export const ERROR = 'ERROR';
export const SUCCESS_BUDGET = 'SUCCESS_BUDGET';
export const SUCCESS_EXPENSES = 'SUCCESS_EXPENSES';
export const SUCCESS_EXPENSE = 'SUCCESS_EXPENSE';
export const UPDATING = "UPDATING";

export const getExpenses = () => {
    return (dispatch) => {
        dispatch({ type: PENDING });
        axios
            .get('http://localhost:5000/api/expenses/')
            .then(response => {
                dispatch({ type: SUCCESS_EXPENSES, expenses: response.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, error: 'ERROR FETCHING EXPENSES' })
            })
    }
}

export const getExpense = (id) => {
    return (dispatch) => {
        dispatch({ type: PENDING });
        axios
            .get(`http://localhost:5000/api/expenses/${id}`)
            .then(response => {
                console.log('RES', response)
                dispatch({ type: SUCCESS_EXPENSE, expense: response.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, error: 'ERROR FETCHING EXPENSE' })
            })
    }
}

export const startEditing = expense => {
    return {
        type: UPDATING,
        expense
    };
};

export const editExpense = (expense) => {
    return (dispatch) => {
        dispatch({ type: PENDING });
        axios
            .put(`http://localhost:5000/api/expenses/${expense.id}`, expense)
            .then(response => {
                console.log('RES', response)
                dispatch({ type: SUCCESS_EXPENSE, expense: response.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, error: 'ERROR FETCHING EXPENSE' })
            })
    }
};

export const createExpense = (expense) => {
    return dispatch => {
        dispatch({ type: PENDING });
        console.log(expense);
        axios
            .post('http://localhost:5000/api/expenses', expense)
            .then(response => {
                dispatch({ type: SUCCESS_EXPENSES, expenses: response.data })
            })
            .catch(() => {
                dispatch({ type: ERROR, error: 'ERROR CREATING EXPENSE' })
            })
    }
}

export const deleteExpense = id => {
    return dispatch => {
        dispatch({ type: PENDING });
        axios
            .delete(`http://localhost:5000/api/expenses/${id}`)
            .then(response => {
                dispatch({ type: SUCCESS_EXPENSES, expenses: response.data })
            })
            .catch(err =>
                dispatch({ type: ERROR, error: 'ERROR DELETING EXPENSES' })
            );
    }
}

export const createBudget= (budget) => {
    return dispatch => {
        dispatch({ type: PENDING });
        console.log(budget);
        axios
            .post('http://localhost:5000/api/budget', budget)
            .then(response => {
                dispatch({ type: SUCCESS_BUDGET, budget: response.data })
            })
            .catch(() => {
                dispatch({ type: ERROR, error: 'ERROR CREATING BUDGET' })
            })
    }
}
    
export const getBudget = (id) => {
        return (dispatch) => {
            dispatch({ type: PENDING });
            axios
                .get(`http://localhost:5000/api/budget`)
                .then(response => {
                    console.log('RES', response)
                    dispatch({ type: SUCCESS_BUDGET, budget: response.data })
                })
                .catch(err => {
                    dispatch({ type: ERROR, error: 'ERROR FETCHING BUDGET' })
                })
        }
    }