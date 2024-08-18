import React from 'react'
import Header from '../Header/Header'
import CardPizza from '../Cards/CardPizza'
import {Pizzas} from '../../pizzas.js'

export default function Home() {
 
  
  return (
    <div>
      <Header/>
      <div className='container-fluid'>
        <div className='row'>
          {Pizzas.map(item=> (
            <div className='col-md-4 col-xs-12'>
              <CardPizza key={item.id} name={item.name} price={item.price} ingredients={item.ingredients} img={item.img} desc={item.desc}/>
            </div>))}
        </div>
      </div>
    </div>
  )
}
