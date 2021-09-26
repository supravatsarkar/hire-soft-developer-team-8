import React from 'react';
import './Developer.css';

const Developer = (props) => {
    // console.log(props);
    const { name, age, img, salary, gender, country, role } = props.developer;
    return (
        <div class="card developer">
            <img src={img} className="card-img-top d-block mx-auto" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Gender: {gender}</p>
                <p class="card-text">Age: {age}</p>
                <p class="card-text">Role: {role}</p>
                <p class="card-text">Salary: ${salary}</p>
                <p class="card-text">Country: {country}</p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-danger">Add to cart</button>
            </div>
        </div>

    );
};

export default Developer;

{/* <div className="developer">
            <img src={img} alt="" />
            <h5>{name}</h5>
        </div> */}