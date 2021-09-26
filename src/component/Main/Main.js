import React, { useEffect, useState } from 'react';
import Developer from '../../Developer/Developer';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    // load data to developer section UI 
    const [developers, setDevelopers] = useState([]);
    // Load person(developer) to cart section ui 
    const [persons, setPerons] = useState([]);

    // Load fake data form api 
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => {
                setDevelopers(data);
                console.log(data);
            });
    }, [])

    // Add to cart botton event handler 
    const addToCartHandle = (developer) => {
        const newArray = [...persons];
        if (!persons.find(person => person.name === developer.name)) {
            newArray.push(developer);
        } else {
            alert('Hey! ' + developer.name + ' Already added');
        }
        setPerons(newArray);

    }
    // console.log(newArray);
    return (
        <div className="main">
            {/* Developers section  */}
            <div className="developers-container">
                {
                    developers.map(developer => <Developer
                        key={developer.name}
                        developer={developer}
                        addToCartHandle={addToCartHandle}
                    ></Developer>)
                }
            </div>

            {/* Cart Section*/}
            <div className="cart-container">
                <Cart persons={persons}></Cart>
            </div>
        </div>
    );
};

export default Main;