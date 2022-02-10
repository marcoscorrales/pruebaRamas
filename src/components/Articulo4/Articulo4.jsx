import "./Articulo4.css";
import img from "../../assets/images/icon-calculator.svg"
import React from 'react'

export const Articulo4 = () => {
  return (
    <article className="articulo4">
        <h2 className="articulo__h2">Calculator</h2>
        <p className="articulo__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img className="articulo__img" src={img} alt="imagen" />
    </article>
  )
}
