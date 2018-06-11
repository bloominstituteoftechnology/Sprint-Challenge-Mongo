import { PENDING, ERROR, SUCCESS_BUDGET, SUCCESS_EXPENSE, SUCCESS_EXPENSES, UPDATING } from '../actions';

const initialState = {
    expenses: [],
    budget: [],
    fetchingBudget: false,
    addingBudget: false,
    updatingBudget: false,
    deletingBudget: false,
    fetchingExpenses: false,
    addingExpenses: false,
    updatingExpenses: false,
    deletingExpenses: false,
    error: null,
    // note: {
    //     modal: false,

    // }
}

const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return Object.assign({}, state, { fetchingBudget: true });
        case SUCCESS_BUDGET:
            return Object.assign({}, state, {
                budget: action.budget,
                fetchingBudget: false
            });
        case ERROR:
            return Object.assign({}, state, {
                error: action.error,
                fetchingBudget: false
            });
        case UPDATING:
            return Object.assign({}, state, {
                updating: true,
                budget: action.budget
            });
        default:
            return state;
    }

}

 const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return Object.assign({}, state, { fetchingExpenses: true });
        case SUCCESS_EXPENSES:
            return Object.assign({}, state, {
                expenses: action.expenses,
                fetchingNotes: false
            });
        case SUCCESS_EXPENSE:
            return Object.assign({}, state, {
                expense: action.expense,
                fetchingExpenses: false
            });
        case ERROR:
            return Object.assign({}, state, {
                error: action.error,
                fetchingExpenses: false
            });
        case UPDATING:
            return Object.assign({}, state, {
                updating: true,
                expense: action.expense
            });
        default:
            return state;
    }

}

export default expenseReducer;
