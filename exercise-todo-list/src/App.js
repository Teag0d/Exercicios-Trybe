import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],

    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeTodo(indexTodo) {
    const { listTodo } = this.state;
    const result = listTodo.filter((item) => item !== indexTodo);
    this.setState({ listTodo: result });
  }

  render() {
    const { listTodo } = this.state;

    return (
      <main className="App">
        <InputTodo
          addTodo={ (todo) => this.addTodo(todo) }
          { ...this.state }
        />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>

              <Item
                content={ todo }
                removeTodo={ this.removeTodo }
              />
              {/* Colocar o botão aqui */}
            </li>
          )) }
        </ul>
      </main>
    );
  }
}

export default App;
