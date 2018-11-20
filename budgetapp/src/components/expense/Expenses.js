import React, { Component } from 'react';
import './Expenses.css';
// import '../components/Expenses.css';
import { Container, Row, Col } from 'reactstrap';

import { getExpenses } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class Expenses extends Component {


    componentDidMount() {
        this.props.getExpenses();
    }

    render() {
        return (
            <div>
                <h5>Your Expenses:</h5>
                {this.props.expenses.map(expense => {
                    return (
                        <Card>
                            <Link to={`/expenses/${expense.id}`}
                                className="expense-card" key={expense.id} expense={expense}>
                                <CardBody>
                                    <CardTitle>{expense.description.substring(0, 21)}</CardTitle>
                                    <hr className="my-2" />
                                    <CardText>{expense.amount}</CardText>
                                </CardBody>
                            </Link>
                        </Card>
                    )
                })}

                {this.props.pending ? <h1>LOADING</h1> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        expenses: state.expenses,
        error: state.error,
        pending: state.fetchingExpenses,

    }
}

export default connect(mapStateToProps, { getExpenses })(Expenses);
