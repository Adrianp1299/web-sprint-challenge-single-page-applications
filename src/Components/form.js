import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormWrap = styled.div`
display: flex;
flex-direction: column;
`
const ToppingWrap = styled.div`
border:1px solid black;
`


const Form = (props) => {
    const {change, submit, errors} = props;
    const {customer, size, topping1, topping2, topping3, topping4, special} = props.values;
    const navigate = useNavigate();

    const onChange = (event) => {
        const {name, value, checked, type} = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <div>
            <h3>Build your Pizza!</h3>
            <p>{errors.customer}</p>
            
            <form id="pizza-form" onSubmit={onSubmit}>
            <FormWrap>
                <label>Name:
                    <input name="customer" type="text" id="name-input" value={customer} onChange={onChange} />
                </label>
                <label>Pick your size:
                    <select value={size} id="size-dropdown" name="size" onChange={onChange}>
                        <option value=''>--select a size--</option>
                        <option value='small'>--Small--</option>
                        <option value='med'>--Medium--</option>
                        <option value='large'>--Large--</option>
                    </select>
                </label>
                <ToppingWrap>
                <label>Toppings:<br></br>
                    Pepperoni<input type="checkbox" name="topping1" checked={topping1} onChange={onChange}/>
                    <br></br>
                    Pineapple<input type="checkbox" name="topping2" checked={topping2} onChange={onChange}/>
                    <br></br>
                    Ham<input type="checkbox" name="topping3" checked={topping3} onChange={onChange}/>
                    <br></br>
                    Peppers<input type="checkbox" name="topping4" checked={topping4} onChange={onChange}/>
                </label>
                </ToppingWrap>
                <label>Special Instructions:
                    <input name="special" type="text" id="special-text" value={special} onChange={onChange} />
                </label>
                <input id="order-button" type="submit" value="order" />
                </FormWrap>

            </form>
        </div>
    )
}

export default Form;