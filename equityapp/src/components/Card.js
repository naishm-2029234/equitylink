import React from 'react';
import '../practice.css';

const Card = ({ imageSrc, type, date, title, description, link }) => {
    return (
        <div className="card">
            <div className="card">
                <div className="card-image">
                    <img src={imageSrc} alt={title} />
                </div>
                <div className="card-content">
                    <div className="card-info">
                        <div className="type">{type}</div>
                        <div className="date">{date}</div>
                </div>
                <h4 className="title">{title}</h4>
                <p className="description">{description}</p>
                <div className="continue-reading">
                    <a href={link} className="continue-link">Continue Reading</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Card;
