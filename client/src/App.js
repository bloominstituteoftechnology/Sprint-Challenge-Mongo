import React, { Component } from 'react';
import FilmList from './components/FriendsList'
import Header from './components/Header'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import InputField from './components/Input'
import Header2 from './components/secondHeader'

// 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // // }
  destroy = (id) => {
    console.log(id)
    axios.delete(`http://localhost:5000/api/expenses/${id}`)
      .then(response => {
        axios.get('http://localhost:5000/api/expenses')
          .then(res => this.setState({ films: res.data }))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/api/expenses')
      .then(res => {
        // console.log(res)
        this.setState({ films: res.data })
      })

      .catch(err => console.log(err))

    setTimeout(this.componentDidMount, 15000);
  }

  render() {
    console.log(this.state.films[this.state.films.length - 1])
    return (
      <div className="App">

        <Route path="/" component={Header} />
        <Route exact path="/" render={(props) => <Header2 films={this.state.films} />} />
        <Route exact path="/" render={(props) => <FilmList {...props} films={this.state.films} destroy={this.destroy} />} />
        <Route exact path="/input" component={InputField} />
      </div>
    );
  }
}





// <FormGroup>
//   <Label for="firstName">First Name</Label>
//   <Input type="name" value={this.state.firstName} onChange={this.handleChange} name="firstName" id="firstName" placeholder="Enter your First Name here" />
// </FormGroup>
// <FormGroup>
//   <Label for="lastName">Last Name</Label>
//   <Input type="lastName" value={this.state.lastName} onChange={this.handleChange} name="lastName" id="lastName" placeholder="Enter your Last Name here" />
// </FormGroup>
// <FormGroup>
//   <Label for="Age">Age</Label>
//   <Input type="Age" value={this.state.age} onChange={this.handleChange} name="age" id="Age" placeholder="Enter your Age here" />
// </FormGroup>
// <Button type="button" onClick={this.submitUser}>Submit</Button>


export default App;
