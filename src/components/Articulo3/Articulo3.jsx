import "./Articulo3.css";
import img from "../../assets/images/icon-karma.svg"
import React from 'react'

export const Articulo3 = () => {
  return (
    <article className="articulo3">
        <h2 className="articulo__h2">Karma</h2>
        <p className="articulo__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img className="articulo__img" src={img} alt="imagen" />
    </article>
  )
}
