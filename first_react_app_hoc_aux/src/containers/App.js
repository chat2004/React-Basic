import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

// PureComponent already have shouldComponentUpdate build in
class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor!!', props)
    this.state = {
      persons: [
        {id: 1, name: 'Vu', age: 38},
        {id: 2, name: 'Vu 1', age: 28},
        {id: 3, name: 'Ngoc', age: 33}
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount!!')
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()!!')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate!!', nextProps, nextState)
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] inside componentWillUpdate!!', nextProps, nextState)
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] inside componentDidUpdate!!')
  }

  // state = {
  //   persons: [
  //     {id: 1, name: 'Vu', age: 38},
  //     {id: 2, name: 'Vu 1', age: 28},
  //     {id: 3, name: 'Ngoc', age: 33}
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] inside render()!!')
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
        <WithClass classes={classes.App}>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons} 
            clicked={this.togglePersonHandler} />
          {persons}
        </WithClass>
      
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now?'));
  }
}

export default App;
