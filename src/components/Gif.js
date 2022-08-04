import React from "react";
import './Gif.css';

export default function Gif({title, id, url}) {
  return (
    <div class="gifContainer">
      <h4>{title}</h4>
      <img src={url} alt="" />
      <p>ID: {id}</p>
    </div>
  );
}
