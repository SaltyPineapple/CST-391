import React from "react";

const Card = (props) => {
    return (
        <div className="cardBody">
            <h1>{props.albumTitle}</h1>
            <p>{props.year}</p>
            <a href="www.mjprattcoding.com">Go</a>
        </div>
    );
}

export default Card;