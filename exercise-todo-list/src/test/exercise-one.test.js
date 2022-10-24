import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const add = screen.getByText('Adicionar');
    expect(add).toBeInTheDocument();
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const tarefaInput = screen.getByLabelText('Tarefa:');
    const add = screen.getByText('Adicionar');

    expect(add).toBeInTheDocument();
    expect(add).toHaveProperty('type', 'button');
    expect(tarefaInput).toBeInTheDocument();
    expect(tarefaInput).toHaveValue('');

    userEvent.type(tarefaInput, 'Hi there');
    expect(tarefaInput).toHaveValue('Hi there');

    userEvent.click(add);
    expect(screen.getByText('Hi there')).toBeInTheDocument();
    expect(tarefaInput).toHaveValue('');
  });
});
