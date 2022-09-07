import React from "react";

export const Jumbotron = (props) => {
    const {jumbotronDescription, title} = props
    return (
        <div className="col-12 pt-4">
            <div className=" bg-light px-4 py-5 my-5">
                <span className="fs-1">
                    {props.title}
                </span>
                <p className="fs-5">
                    {props.description}
                </p>
                <button type="button" className="btn btn-primary">
                    Call to action!
                </button>
            </div>
        </div>
    );
}