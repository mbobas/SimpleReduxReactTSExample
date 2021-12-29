import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector} from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from './state';

function App() {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt, add1, multiple, onToggle } = bindActionCreators(actionCreators, dispatch);

  const amount = useSelector((state: State) => state.bank);
  const counter = useSelector((state: State) => state.counts)
  const toggle = useSelector((state: State) => state.toggle)

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>WithDraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>

      <h1>{counter}</h1>
      <button onClick={() => add1()}>ADD</button>
      <button onClick={() => multiple(2)}>Multiple</button>

      <h1>{"" + toggle}</h1>
      <button onClick={() => onToggle()}>Multiple</button>
    </div>
  );
}

export default App;
