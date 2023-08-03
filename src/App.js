import logo from './logo.svg';
import './App.css';
import data from './Components/Data';
import Class from './Components/Class';
import Function from './Components/Function';
import { useState } from 'react';

function App() {
  const [no, setNo] = useState(0);
  const btn = () =>{
    setNo(
      no + 1
    )
  }
  const [number, setNumber] = useState(0);
  const button = () =>{
    setNumber(
      number + 1
    )
  }
  return (
    <>
      <Class record={data}
              number = {number}
              button = {button}
      />

      <Function record={data}
                no = {no}
                btn = {btn}
      />
    </>
  );
}

export default App;
