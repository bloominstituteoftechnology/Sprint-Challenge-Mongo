import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Link } from 'react-router-dom'

export class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bugets: "Month June",
            categories: ["Groceries", "Amusement", "Bills", "Gas"],
            description: '',
            amount: '',
            chosencat: ''
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDropChange = (e) => {
        console.log(e)
        this.setState({
            chosencat: e.label
        })
    }
    submitExpense = () => {
        let category = ''
        if (this.state.chosencat === "Groceries") {
            category = "5b1a9eeeec8047223e5fba19"
        } else if (this.state.chosencat === "Amusement") {
            category = "5b1a9f55ec8047223e5fba1a"
        } else if (this.state.chosencat === "Bills") {
            category = "5b1a9f8aec8047223e5fba1b"
        } else {
            category = "5b1a9f97ec8047223e5fba1c"
        }
        let newEx = {
            description: this.state.description,
            amount: this.state.amount,
            category: category,
            budget: "5b1a9addff8a891f3ec2d125"
        }
        console.log(newEx)
        axios.post('http://localhost:5000/api/expenses', newEx)
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Form>
                <Dropdown options={this.state.categories} onChange={this.handleDropChange} value={this.state.chosencat} placeholder="Select a Category" />
                <FormGroup>
                    <Label for="firstName">Description</Label>
                    <Input type="description" value={this.state.description} onChange={this.handleChange} name="description" id="description" placeholder="Enter your description" />
                </FormGroup>
                <FormGroup>
                    <Label for="amount">Amount</Label>
                    <Input type="amount" value={this.state.amount} onChange={this.handleChange} name="amount" id="amount" placeholder="Enter your Last Name here" />
                </FormGroup>
                <Link to="/"><Button type="button" onClick={this.submitExpense}>Submit</Button></Link>
                <Link to="/"><Button type="button">Back to Main</Button></Link>
            </Form>
        )
    }
}

export default InputField
