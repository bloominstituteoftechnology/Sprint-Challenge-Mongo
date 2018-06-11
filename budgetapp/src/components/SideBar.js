import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import './SideBar.css'


const SideBar = () => (
    <div>
        <h2>Budget</h2>

        <Link to='/expenses'>
            <button className={"button"} pathto='/expenses' >
                View Your Expenses
                </button>
        </Link>
        <Link to='/new'>
            <button className={"button"}>
                + Create New Expense
                </button>
        </Link>
    </div>
)

export default SideBar
