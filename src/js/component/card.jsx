import React from "react";

export const Card = (props) => {
    const {image, title, description} = props
    return (
        <div className="card cards1 mx-10 mb-20">
            <img src={image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text text-center">{description}</p>
            </div>
            <div className="card-footer d-flex">
                <a href="#" className="btn btn-primary mx-auto">Call to action!</a>
            </div>
        </div>
    );
}