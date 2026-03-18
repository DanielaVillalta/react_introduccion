import React from "react";

const Card = ({ name, age, profession, city }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    <strong>Age:</strong> {age}<br />
                    <strong>Profession:</strong> {profession}<br />
                    <strong>City:</strong> {city}
                </p>
            </div>
        </div>
    );
};

export default Card