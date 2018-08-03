/*
  Be sure to import in all of the action types from `../actions`
*/
import { ADD, EDIT, CANCEL, FETCHED, FETCHING, SAVING, SAVED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   budgets: [],
   fetchingbudgets: false
   addingbudget: false
   updatingbudget: false
   deletingbudget: false
   error: null
 }
*/

const initialState = {
  budget: {},

  budgetsCategory: [],

  add: false,
  edit: false,


  fetching: false,
  fetched: false,

  saving: false,
  saved: false,

  updating: false,
  updated: false,

  deleting: false,
  deleted: false,

  error: null
}

/*
  You'll only need one budget reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


export const reducer = (state=initialState, action) => {
    switch (action.type) {

        case ADD:
        return Object.assign({}, state, {
            add: true,
        })
        case EDIT:
        return Object.assign({}, state, {
            edit: true,
        })
        case CANCEL:
        return Object.assign({}, state, {
            add: false,
            edit: false
        })
        case FETCHING:
            return Object.assign({}, state, {
                fetching: true,
                fetched: false,
            })
        case FETCHED:
            console.log("My data : ", action.payload);
            const data = action.payload;
            let budget = {
              title: "Personal",
              total: 0,
              current: 0
            };
            data.forEach(expense => {
              budget.total+=expense.budget;
              budget.current+=expense.totalAmount
            })

            return Object.assign({}, state, {
                fetched: true,
                fetching: false,
                budget: budget,
                budgetsCategory: action.payload,
            })
        case SAVING:
            return Object.assign({}, state, {
                saving: true,
                saved: false
            })
        case SAVED: 
            return Object.assign({}, state, {
                saving: false,
                saved: true,
                budgets: action.payload
            })
        case UPDATING:
            return Object.assign({}, state, {
                updating: true,
                updated: false
            })
        case UPDATED:
            return Object.assign({}, state, {
                updated: true,
                updating: false,
                budgets: action.payload
            })
        case DELETING:
            return Object.assign({}, state, {
                deleted: false,
                deleting: true
            })
        case DELETED:
            return Object.assign({}, state, {
                deleted: true,
                deleting: false,
                budgets: action.payload
            })
        case ERROR:
            return Object.assign({}, state, {
                fetching: false,
                editing: false,
                deleting: false,
                error: action.payload
            })
        default:
            return state;
    }
}

export default reducer;