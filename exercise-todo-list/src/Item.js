import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { content, removeTodo } = props;
  return (
    <div className="Item">
      { content }
      <button
        type="button"
        onClick={ () => removeTodo(content) }
      >
        Remover
      </button>
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
