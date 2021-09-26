import React from 'react';
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

            {persons.map(person => <DeveloperUnderCart
                key={person.name}
                person={person}
            ></DeveloperUnderCart>)}

        </div>
    );
};

export default Cart;