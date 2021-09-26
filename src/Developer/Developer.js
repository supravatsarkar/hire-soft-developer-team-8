import React from 'react';
import './Developer.css';

const Developer = (props) => {
    // console.log(props);
    const { name, age, img, salary, gender, country, role } = props.developer;
    return (
        <div className="card developer">
            <img src={img} className="card-img-top d-block mx-auto" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-danger">{name}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Age: {age}</p>
                <p className="card-text">Role: {role}</p>
                <p className="card-text">Salary: ${salary}</p>
                <p className="card-text">Country: {country}</p>
            </div>
            <div className="card-footer">
                <button onClick={() => props.addToCartHandle(props.developer)} type="button" className="btn btn-danger">Add to cart</button>
            </div>
        </div>

    );
};

export default Developer;

{/* <div className="developer">
            <img src={img} alt="" />
            <h5>{name}</h5>
        </div> */}