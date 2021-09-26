import React from 'react';
import './DeveloperUnderCart.css';

const DeveloperUnderCart = (props) => {
    // console.log(props.person.name);
    const { name, img, salary } = props.person;
    return (
        <div className="developerUnderCart">
            <div className="card mb-3" >
                <div className="row g-0">
                    {/* image */}
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    {/* info  */}
                    <div className="col-md-8">
                        <div className="card-body">
                            <h6 className="card-text">{name}</h6>
                            <p className="card-text"><small className="text-muted">$ {salary}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <p className="text-white"></p> */}
        </div>
    );
};

export default DeveloperUnderCart;