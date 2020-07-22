import React from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3> {category} </h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        {data.map((item) => (
          <GifGridItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
