import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [title, settitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  const navigate = useNavigate()
  const handleSubmit = async (e) => {

    e.preventDefault();



    const formData = new FormData(e.target)



      await axios.post("http://localhost:3000/product/add", formData)
        .then((res) => {
          console.log(res);
          navigate("/")
        })
        .catch((err) => {
          console.log(err);
          alert(err.message)

        })
    }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title</label>
        <input type="text" placeholder="title" 
        name="title" 
        value={title} 
        onChange={(e) => {
          settitle(e.target.value)
        }} 
        />

        <label htmlFor="Description">Description</label>
        <input type="text" placeholder="Description" name="description" 
        value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }} />

        <label htmlFor="Category">Category</label>
        <input type="text" placeholder="Category" name="category" value={category}
          onChange={(e) => {
            setCategory(e.target.value)
          }} />

        <label htmlFor="Image">Image</label>
        <input type="file" placeholder="Choose file" name="image" value={image}
          onChange={(e) => {
            console.log(e.target.value);
           
          }} />

        <label htmlFor="Price">Price</label>
        <input type="text" placeholder="Price" name="price" value={price}
          onChange={(e) => {
            setPrice(e.target.value)
          }} />

        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Login