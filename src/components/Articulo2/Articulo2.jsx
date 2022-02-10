import "./Articulo2.css";
import img from "../../assets/images/icon-team-builder.svg"
import React from 'react'

export const Articulo2 = () => {
  return (
    <article className="articulo2">
        <h2 className="articulo__h2">Team Builder</h2>
        <p className="articulo__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img className="articulo__img" src={img} alt="imagen" />
    </article>
  )
}
