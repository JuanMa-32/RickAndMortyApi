import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({mascota}) => {
  return (
    <div className="col">
    <div className="card shadow-sm">
      <img className="bd-placeholder-img card-img-top" width="100%"  src={mascota.image} alt="imagen-pj"/>
      <div className="card-body">
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
          <button type="button" className="btn btn-link">
            <Link to={`/details/${mascota.id}`}>Detalle</Link>
         </button>
          </div>
          <small className="text-body-secondary">9 mins</small>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
