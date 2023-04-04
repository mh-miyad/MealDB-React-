import { Button, Card } from 'flowbite-react'
import React from 'react'

const CartCom = ({img, details,title}) => {
  return (
    <div>

<div className="max-w-xs">
  <Card
    imgAlt=""
    imgSrc={img}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {details}
    </p>
    <div className='flex justify-between'>
        <Button color={'failure'}> Add To Card</Button>
        <Button color={'success'}> More Details</Button>
    </div>
  </Card>
</div>



    </div>
  )
}

export default CartCom