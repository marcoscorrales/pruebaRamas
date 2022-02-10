import "./Articulo1.css";
import img from "../../assets/images/icon-supervisor.svg"
import React from 'react'

export const Articulo1 = () => {
  return (
    <article className="articulo1">
        <h2 className="articulo__h2">Supervisor</h2>
        <p className="articulo__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.Holaa</p>
        <img className="articulo__img" src={img} alt="imagen" />
    </article>
  )
}
