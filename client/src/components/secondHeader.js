import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div className="second-header">
            {props.films.length && <h4 className="budget">What is left of your Budget: {props.films[props.films.length - 1].budget.budget}$</h4>}
            <Link to="/input"><button className="add-button" type="button">Add an Expense</button></Link>
        </div>
    )
}
