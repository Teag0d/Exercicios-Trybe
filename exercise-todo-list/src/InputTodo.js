import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
      checkAdd: true,
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    if (value.length > 0) {
      this.setState({ checkAdd: false, textTodo: value });
    } else {
      this.setState({ checkAdd: true, textTodo: value });
    }
  }

  addItem(value) {
    const { addTodo } = this.props;

    this.setState({ textTodo: '', checkAdd: true });
    addTodo(value);
  }

  render() {
    const { textTodo, checkAdd } = this.state;
    return (
      <section className="InputTodo">
        <label htmlFor="inputTodo">
          Tarefa:
          <input
            id="inputTodo"
            type="text"
            value={ textTodo }
            onChange={ (e) => this.changeTextTodo(e.target.value) }
          />
        </label>
        <button
          type="button"
          onClick={ () => this.addItem(textTodo) }
          disabled={ checkAdd }
        >
          Adicionar
        </button>
      </section>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
