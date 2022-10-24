import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const button = screen.getByText(/adicionar/i);
    const input = screen.getByLabelText('Tarefa:');
    listTodo.forEach((item) => {
      userEvent.type(input, item);
      userEvent.click(button);
    });
    listTodo.forEach((item, i) => {
      expect(screen.getByText(listTodo[i])).toBeInTheDocument();
      expect(screen.getByText(item)).toBeInTheDocument();
      // duas formas de fazer, se usar a primeira passar _item no param
    });
    // expect(screen.getByText(listTodo[1])).toBeInTheDocument();
    // expect(screen.getByText(listTodo[3])).toBeInTheDocument();
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const test = 'testando';
    render(<Item content={ test } />);
    expect(screen.getByText('testando')).toBeInTheDocument();
  });
});
