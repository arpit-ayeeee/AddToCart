import React from 'react';
import { Tshirt } from './Tshirt';

export const TshirtList = () => {

  const database = [
    { name: "T-shirt", price: 500, id: 1 },
    { name: "Yellow Hoodie", price: 600, id: 2 },
    { name: "Blue Polo", price: 400, id: 3 },
  ]

  return (
    <div>
      {
        database.map(item => (
          <Tshirt name={item.name} price={item.price} key={item.id} />
        ))
      }
    </div>
  )
}