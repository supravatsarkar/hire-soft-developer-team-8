import React, { useEffect, useState } from 'react';
import Developer from '../../Developer/Developer';
import './Main.css';

const Main = () => {
    const [developers, setDevelopers] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => {
                setDevelopers(data);
                console.log(data);
            });
    }, [])

    const addToCartHandle = (developer) => {
        const newArray = [...items];
        if (!items.find(item => item.name === developer.name)) {
            newArray.push(developer);
        } else {
            alert('Hey! ' + developer.name + ' Already added');
        }
        setItems(newArray);

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
                <h2 className={"text-danger"}>Cart</h2>
                <h5 className={"text-danger"}>Item Added{items.length}</h5>
                {items.map(item => <h5 className={"text-danger"}>{item.name}</h5>)}
            </div>
        </div>
    );
};

export default Main;