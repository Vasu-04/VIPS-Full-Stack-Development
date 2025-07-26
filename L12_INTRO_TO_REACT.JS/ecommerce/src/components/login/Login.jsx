import React, { useState } from 'react'

const Login = () => {

    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [image, setimage] = useState('')
    const [category, setcategory] = useState('')
    const [price, setprice] = useState('')
    
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(title);
    //     console.log(description);
    //     console.log(category);
    //     console.log(price);

    //     const formdata = new FormData()
    //     formdata.append("title", title)
    //     formdata.append("image", image)
    //     formdata.append("description", description)
    //     formdata.append("category", category)
    //     formdata.append("price", price)
    //     console.log(formdata)

    // }

    return (
        <div>
            <form onSubmit={handleSubmit} id="form">
                <label htmlFor="title">Title :</label>
                <input placeholder="Enter Title" type="text" name="title" value={title} onChange={(e) => { settitle(e.target.value) }}></input><br></br>
                <label htmlFor="description">Description :</label>
                <input placeholder="Enter Description" type="text" name="description" value={description} onChange={(e) => { setdescription(e.target.value) }}></input><br></br>
                <label htmlFor="category">Category :</label>
                <input placeholder="Enter category" type="text" name="category" value={category} onChange={(e) => { setcategory(e.target.value) }}></input><br></br>
                <label htmlFor="price">Price :</label>
                <input placeholder="Enter price" type="text" name="price" value={price} onChange={(e) => { setprice(e.target.value) }}></input><br></br>
                <label htmlFor="image">Image :</label>
                <input type="file" name="image" accept="image"></input><br></br>
                <button class="btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
