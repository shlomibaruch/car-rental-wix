import React, { useContext } from 'react'
import { CarContext } from '../../context/context'
import Title from '../Title';
import '../../components/navbar.css';
export default function CarFilter({ cars }) {

    const context = useContext(CarContext);
    const { handleChange, type, price, maxPrice, minPrice, carName, year } = context;

    const getUniqueValue = (items, value) => {
        return [... new Set(items.map(item => item[value]))]
    }
    let types = getUniqueValue(cars, "carName");
    types = ["all", ...types]
    types = types.map((item, index) => {
        return <option value={item} key={index}>
            {item}
        </option>
    });

    let car_year = getUniqueValue(cars, 'year');

    car_year = car_year.map((item, index) => {
        return <option value={item} key={index}>
            {item}
        </option>
    })


    return (
        <section className='filter-cars-container'>
            <Title title="Search car" />
            {/* choose car */}

            <form className='filrter-form'>
                <div className='form-group'>
                    <label htmlFor='carName'>Car type</label>
                    <select name='carName' id='carName' value={carName} onChange={handleChange}>
                        {types}
                    </select>

                </div>
                {/* choose year */}
                <div className='form-group'>
                    <label htmlFor='year'> Year</label>
                    <select name='year' id='year' value={year} onChange={handleChange}>
                        {car_year}
                    </select>

                </div>
                {/* choose price */}
                <div className='form-group'>
                    <label htmlFor='price'> Price</label>
                    <input type='range' name='price' id='price' step='50' max={maxPrice} min={minPrice} onChange={handleChange} /> <span>car price $ {maxPrice}</span>

                </div>

            </form>
        </section>
    )
}
