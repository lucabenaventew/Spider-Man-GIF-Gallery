import React,{ useEffect, useState } from 'react'
import getGifs from '../services/getGifs';
import Gif from './Gif'

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword })
    .then(gifs => setGifs(gifs));
    setGifs(gifs);
  }, []); // eslint-disable-line

  return gifs.map(({ id, title, url }) =>
    <Gif
      key={id}
      title={title}
      id={id}
      url={url}
    />
  )
}
