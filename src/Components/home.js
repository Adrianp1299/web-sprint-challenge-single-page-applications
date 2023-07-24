import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h3>This is home</h3>
            <button id="order-pizza" onClick={() => navigate('/pizza')}>Start your Order!</button>
        </div>
    )
}

export default Home;