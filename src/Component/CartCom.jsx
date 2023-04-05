import { Button, Card } from 'flowbite-react'
import React, { useState } from 'react'
import ModalCom from './ModalCom'

const CartCom = ({ img, details, title }) => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleConfirm = () => {
    alert('Product deleted');
    toggleModal();
  };
  
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
            <Button color="failure">
              Add To Cart
            </Button>
            <Button color="success"  onClick={toggleModal} >
              More Details
            </Button>
          </div>
        </Card>
      </div>
      <ModalCom
        show={showModal}
        onClose={toggleModal}
        onConfirm={handleConfirm}
      />
    </div>
  )
}

export default CartCom