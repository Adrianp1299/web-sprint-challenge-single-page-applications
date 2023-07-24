import React, { useState } from "react";
import axios from "axios";
import * as yup from 'yup';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Components/home';
import Form from './Components/form';
import Confirmation from './Components/confirmation';
import schema from "./Validation/pizzaSchema";

const HeadBoarder = styled.div`
outline:1px solid black;
`

const Header = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 90%;
`
const HomeBut = styled.button `
 background-color: black;
 color: white;
 border: 3px, grey;
`

const initialFormValues = {
  customer: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: '',
}
const initialErrValues = {
  customer: '',
  size: '',
  topping1: '',
  topping2: '',
  topping3: '',
  topping4: '',
  special: '',
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errValues, setErrValues] = useState(initialErrValues);
  const[order, setOrder] = useState([])
  const navigate = useNavigate()

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrValues({ ... errValues, [name]: '' }))
    .catch(err => setErrValues({ ... errValues, [name]: err.errors[0] }))
  }

  const handleChange = (name, values) => {
    validate(name, values);
    setFormValues({...formValues, [name]: values});
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
    .then(res => {
      setOrder([ res.data, ...order ])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
    navigate('confirmation')
  }

  return (
    <div>
      <HeadBoarder>
      <Header>
      <h1>Bloomtech Eats</h1>
      <HomeBut onClick={() => navigate('/')}>Home</HomeBut>
      </Header>
      </HeadBoarder>
      
      <Routes>
        <Route path ="/" element={ <Home/> } />
        <Route path ="pizza" element={ <Form values={formValues} errors={errValues} change={handleChange} submit={handleSubmit}/> } />
        <Route path ="confirmation" element={ <Confirmation/> } />
      </Routes>
    </div>
  );
};
export default App;
