import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Expenses from './expense/Expenses.js'
// import NewExpense from './NewExpense'
// import Expense from './Note'
// import NoteEdit from './NoteEdit'
// import Modal from './Modal'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <Switch>
        <Route exact path='/expenses' component={Expenses} />
        {/* <Route path='/new' component={NewExpense} /> */}
        {/* <Route exact path='/expenses/:id' component={Expense} /> */}
        {/* <Route path='/expenses/edit/:id' component={ExpenseEdit} /> */}
        {/* <Route exact path='/expenses/expense/delete/' component={Modal} /> */}

    </Switch>

)

export default Main
