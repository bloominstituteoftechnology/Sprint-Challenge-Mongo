import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Expenses from './expense/Expenses.js'
import NewExpense from './expense/NewExpense'
import Expense from './expense/Expense'
// import NoteEdit from './NoteEdit'
// import Modal from './Modal'


const Main = () => (
    <Switch>
        <Route exact path='/expenses' component={Expenses} />
        <Route path='/new' component={NewExpense} />
        <Route exact path='/expenses/:id' component={Expense} />
        {/* <Route path='/expenses/edit/:id' component={ExpenseEdit} /> */}
        {/* <Route exact path='/expenses/expense/delete/' component={Modal} /> */}

    </Switch>

)

export default Main
