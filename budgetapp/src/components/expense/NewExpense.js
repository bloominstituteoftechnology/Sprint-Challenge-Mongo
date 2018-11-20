import React, { Component } from 'react';
import { createExpense } from '../../actions';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';

class NewExpense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            amount: Number
        }
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.createExpense(this.state);
        this.setState({
            description: '',
            amount: Number
        });
        this.props.history.push(`/expenses/`)
    }

    render() {
        return (
            <div>
                <h5>Create New Expense:</h5>
                <Form>
                    <FormGroup>
                        <div>
                            <Input
                                type="text"
                                name="description"
                                placeholder="Description"
                                onChange={this.handleChange}
                                value={this.state.description}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <Input rows="2"
                                type="textarea"
                                placeholder="How much did you spend?"
                                onChange={this.handleChange}
                                value={this.state.amount}
                                name="amount"
                            />
                        </div>
                    </FormGroup>
                    <FormGroup >
                        <div>
                            <Button color="info" onClick={this.handleSubmit}>Save</Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}



export default connect(null, { createExpense })(NewExpense);