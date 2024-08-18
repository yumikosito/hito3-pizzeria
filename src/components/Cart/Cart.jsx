import React from 'react'
import { PizzaCart } from '../../pizzas'
import PizzaTotal from '../Cards/PizzaTotal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Cart = () => {
  const [count, setCount] = useState(0)
  let total=10
  function actCart(){
    total=total+1
  }






  return (
    <div>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0">Carrito de compra</h3>
              <div>
                <p className="mb-0"><span className="text-muted">Ordenar por:</span> <a href="#!" className="text-body">Precio <FontAwesomeIcon icon={faAngleDown} /></a></p>
              </div>
            </div>

            {PizzaCart.map(item=> (
              <PizzaTotal key={item.id} name={item.name} price={item.price} ingredients={item.ingredients} img={item.img} actualizarCarro={actCart}/>
            ))}

            <div className="card mb-4">
              <div className="card-body p-3 d-flex flex-row">
                <div data-mdb-input-init className="form-outline flex-fill">
                  <input type="text" id="form1" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form1">Codigo de descuento</label>
                </div>
                <button  type="button" className="btn btn-outline-warning btn-md ms-1">Anadir</button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="medium text-muted me-2">Total compra:</span> <span className="lead fw-normal">{total}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-block btn-lg">Proceder al pago</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
