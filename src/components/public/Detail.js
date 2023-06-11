import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import RickAndMortiService from '../../services/RickAndMorti.Service';

const Detail = () => {

  const [mascota,setmascota] = useState({});
  const { id } = useParams();

  useEffect(()=>{
    RickAndMortiService.getCharactersById(id)
    .then((data) => setmascota(data))
  },[])

  return (
    

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">{mascota.name} </h2>
        <p className="lead">{mascota.species}</p>
      </div>
      <div className="col-md-5">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src= {mascota.image}/>
      </div>
      <button type="button" className="btn btn-link">
        <Link to={`/`}>volver</Link>
      </button>
    </div>
  )
}

export default Detail
