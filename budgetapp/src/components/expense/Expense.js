import React, { Component } from 'react';
import { deleteExpense, getExpense, startEditing } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import DeleteModal from '../Modal';
import "./Expense.css";


class Expense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: {},
            modal: false
        }

    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getExpense(id);
    }
    editExpense = () => {
        this.props.startEditing(this.props.expense);
        this.props.history.push(`/expenses/edit/${this.props.expense.id}`)
    }
    deleteExpense = () => {
        this.props.deleteExpense(this.props.expense.id);
        this.props.history.push(`/expenses/`)
    }


    render() {
        const { expense } = this.state;
        const props = {
            expense: this.state
        }
        return (
            <div key={this.props.expense.id}>
                <div className={"textLink"}>
                    <Link
                        to={`/expenses/edit/${this.props.expense.id}`}
                        onClick={this.editExpense} >
                        <a>edit</a>
                    </Link>
                    <Link to={`/expenses/delete/`}>
                        <DeleteModal show={this.props.modal}
                            onClose={this.toggle}
                            deleteExpense={this.deleteExpense}
                            {...props}
                        />
                    </Link>
                </div>
                <div>
                    <div className={"expense-title"}>
                        <p>{this.props.expense.title}</p>
                    </div>
                </div>
                <div>
                    <div className={"expense-content"}>
                        <p>{this.props.expense.content}</p>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        expense: state.expense,
        error: state.error,
        pending: state.fetchingExpenses,

    }
}

export default connect(mapStateToProps, { getExpense, deleteExpense, startEditing })(Expense);

