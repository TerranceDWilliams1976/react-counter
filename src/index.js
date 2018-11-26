import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0,
  counted: 0,
  inputField: 0,

};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
        timesClicked: state.timesClicked + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
        timesClicked: state.timesClicked + 1
      };
      case 'INPUT_FIELD':
      return {
        ...state,
        count: (state.count = 0)
      }
      default:
        return state;
    }
  }


const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));