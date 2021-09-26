import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import DeveloperUnderCart from '../DeveloperUnderCart/DeveloperUnderCart';
import './Cart.css'

const Cart = (props) => {
    const { persons } = props;
    // console.log(persons);
    const totalAmount = persons.reduce((previousValue, person) => previousValue + person.salary, 0)
    return (
        <div className="text-center">
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className="">Item Added: {persons.length}</h5>
                    <h5 className="">Total Amount: ${totalAmount}</h5>
                </div>
            </div>
            {/* Sent data to developerUnderCart component  */}
            {persons.map(person => <DeveloperUnderCart
                key={person.name}
                person={person}
            ></DeveloperUnderCart>)}
            {/* Hire button  */}
            <button type="button" className="btn btn-primary w-75"><FontAwesomeIcon className="me-1" icon={faMoneyCheckAlt} />Hire Now</button>
        </div>
    );
};

export default Cart;