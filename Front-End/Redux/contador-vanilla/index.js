import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const reducer = (state = {count: 0}, action) => {
  if(action.type === 'addOne') {
    return { count: state.count + 1}
  }
  if(action.type === 'subtractOne') {
    return { count: state.count - 1}
  }
  
  return state
}

const store = createStore(reducer, composeWithDevTools());



const addButton = document.querySelector(".add")
addButton.addEventListener('click', () => {
  const actionAddOne = {
    type: "addOne"
  }
  store.dispatch(actionAddOne)
})
const subtractButton = document.querySelector(".subtract")
subtractButton.addEventListener('click', () => {
  const actionSubtractOne = {
    type: "subtractOne"
  }
  store.dispatch(actionSubtractOne)
})

store.subscribe(() => {
  const screenCounter = document.querySelector('h2')
  const countState = store.getState()
  screenCounter.innerHTML = countState.count
})