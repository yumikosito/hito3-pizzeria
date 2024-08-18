import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPizzaSlice, faLock, faLockOpen, faKey, faCartShopping} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const total = 25000;
  const token = false;
  const totalFormat= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(total)

  return (
    <div>
      <nav className="navbar navbar-expand-lg pink-bg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold">
                <a href="#" className="btn btn-outline-light"><FontAwesomeIcon icon={faPizzaSlice} /> Home</a>
              </li>
              {token===true? (<li className="nav-item">
              <a href="#" className="btn btn-outline-light"><FontAwesomeIcon icon={faLockOpen} /> Profile</a>
              </li>):null}
              {token===false? (<li className="nav-item">
                <a href="#" className="btn btn-outline-light"><FontAwesomeIcon icon={faKey} /> Login</a>
              </li>): null }
              {token===false? (<li className="nav-item">
                <a href="#" className="btn btn-outline-light"><FontAwesomeIcon icon={faKey} /> Register</a>
              </li>):null}
              <li className="nav-item">
              <a href="#" className="btn btn-outline-light"><FontAwesomeIcon icon={faCartShopping} /> Total: {totalFormat}</a>
              </li>
              {token===true? (<li className="nav-item">
              <a href="#" className="btn btn-outline-light"><FontAwesomeIcon icon={faLock} /> Logout</a>
              </li>):null}
            </ul>
        </div>
       </div>
      </nav>
    </div>

  )
}
