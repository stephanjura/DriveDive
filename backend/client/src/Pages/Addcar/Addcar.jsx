// AddCar.js

import React, { useState } from 'react';
import { axiosAuthInstToSv } from '../../utils/api';

const Addcar = () => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [mileage, setMileage] = useState('');
    const [condition, setCondition] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        axiosAuthInstToSv.post('/car', {
          make, model, year, color, price, mileage, condition
        }).then(res => {
          window.location = '/mycars'
        }).catch(() => alert('ERROR!'))
    };

    return (
        <div>
            <h2>Add Car</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="make">Make:</label><br />
                <input type="text" id="make" value={make} onChange={(e) => setMake(e.target.value)} required /><br />
                <label htmlFor="model">Model:</label><br />
                <input type="text" id="model" value={model} onChange={(e) => setModel(e.target.value)} required /><br />
                <label htmlFor="year">Year:</label><br />
                <input type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} required /><br />
                <label htmlFor="color">Color:</label><br />
                <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} /><br />
                <label htmlFor="price">Price:</label><br />
                <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
                <label htmlFor="mileage">Mileage:</label><br />
                <input type="number" id="mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} /><br />
                <label htmlFor="condition">Condition:</label><br />
                <select id="condition" value={condition} onChange={(e) => setCondition(e.target.value)}>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                </select><br />
                <button type="submit">Add Car</button>
            </form>
        </div>
    );
};

export default Addcar;
