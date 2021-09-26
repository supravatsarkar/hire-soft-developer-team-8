import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Developer.css';

const Developer = (props) => {
    // console.log(props);
    const { name, age, img, salary, gender, country, role, mainTechnology } = props.developer;
    return (
        <div className="card developer">
            {/* image */}
            <img src={img} className="card-img-top d-block mx-auto" alt="..." />
            {/* info  */}
            <div className="card-body">
                <h5 className="card-title text-danger">{name}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Age: {age}</p>
                <p className="card-text">Role: {role}</p>
                <p className="card-text">Salary: ${salary}</p>
                <p className="card-text">Country: {country}</p>
                <p className="card-text">Master Technology: {mainTechnology.join(', ')}</p>
            </div>
            {/* add button  */}
            <div className="card-footer">
                <button onClick={() => props.addToCartHandle(props.developer)} type="button" className="btn btn-danger"><FontAwesomeIcon className="me-1" icon={faUserPlus} />Add to cart</button>
            </div>
        </div>

    );
};

export default Developer;

