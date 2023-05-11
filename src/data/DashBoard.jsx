import React, { useState } from 'react'
import updateProduct from './Update'

function Dashboard() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [id, setId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    updateProduct(id, title, price, image)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={id} onChange={e => setId(e.target.value)} placeholder='Product ID' />
      <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
      <input type='text' value={price} onChange={e => setPrice(e.target.value)} placeholder='Price' />
      <input type='text' value={image} onChange={e => setImage(e.target.value)} placeholder='Image URL' />
      <button type='submit'>Update Product</button>
    </form>
  )
}

export default Dashboard