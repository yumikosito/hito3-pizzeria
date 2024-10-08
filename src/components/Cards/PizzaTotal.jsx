import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
import '../../index.css'
import { useState } from 'react'

const PizzaTotal = (pizza) => {
  const precioFormat= pizza.price
  const [count, setCount] = useState(1)
  const plusTotal=precioFormat*count
  const totalFormat= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(plusTotal)



  return (
    <div>
      {count>0?
      <div className="card rounded-3 mb-4">
        <div className="card-body p-4">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img src={pizza.img} className="img-fluid rounded-3" alt="..."/>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <p className="lead fw-normal mb-2">{pizza.name}</p>
              <p>{pizza.ingredients.join(", ")}</p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button className="btn btn-link px-2" onClick={()=> pizza.modificacionAct(pizza=pizza, setCount(count-1), count-1)}> <FontAwesomeIcon icon={faMinus} />
              </button>
              <input className="form-control" min={0} type="text" placeholder="Default input" value={count}></input>

              <button className="btn btn-link px-2" onClick={()=> pizza.modificacionAct(pizza=pizza, setCount(count+1), count+1)}> <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 className="mb-0">{totalFormat}</h5>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
              <a href="#!" className="text-danger"><FontAwesomeIcon icon={faTrash} /></a>
            </div>
          </div>
        </div>
      </div>:null}
    </div>

  )
}

export default PizzaTotal
