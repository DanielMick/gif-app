import React from "react";

const GifGridItem = ({ item}) => {
    
  return (
    <div className="card animate__fadeInDown">
      <img src={item.url} alt={item.title} />
      <p>{item.title} </p>
    </div>
  );
};

export default GifGridItem;
