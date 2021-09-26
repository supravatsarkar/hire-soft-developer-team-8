import React, { useEffect, useState } from 'react';
import Developer from '../../Developer/Developer';
import './Main.css';

const Main = () => {
    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => {
                setDevelopers(data);
                console.log(data);
            });
    }, [])

    return (
        <div className="main">
            {/* Developers section  */}
            <div className="developers-container">
                {
                    developers.map(developer => <Developer
                        key={developer.name}
                        developer={developer}
                    ></Developer>)
                }
            </div>

            {/* Cart Section*/}
            <div className="cart-container">
                <h2 >Cart</h2>
            </div>
        </div>
    );
};

export default Main;