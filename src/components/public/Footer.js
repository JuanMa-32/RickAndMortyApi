import React, { useState } from 'react'

const Footer = () => {

   const [clicks,setclick] = useState(0)

   const year = new Date().getFullYear();
   const company = "INDIA";

   const handleClick = () => {
    setclick(clicks+1);
   }

  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">&copy; {year} {company} click : {clicks}</p>

    <span className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    onClick={handleClick}
    >
      
      <img 
      className="bi me-2" width="57" height="42"
      src="boxer.jpg"
      alt="perro"
      />
        

    </span>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>
  )
}

export default Footer
