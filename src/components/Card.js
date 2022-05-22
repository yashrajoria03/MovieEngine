import React from "react";

export default function Card(props) {
  return (
    <div className="movie">
      <div>
        <p>{props.year}</p>
      </div>
      <div>
        <img
          src={
            props.imgurl !== "N/A"
              ? props.imgurl
              : "https://via.placeholder.com/400"
          }
          alt=""
        />
        <div>
          <span>{props.type}</span>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
}
