import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
    const [productData, setProductData] = useState([])
    const [isTrue, setisTrue] = useState(true)
    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        await axios.get("http://localhost:3000/")
            .then((res) => {
                console.log(res.data.products)
                setProductData(res.data.products)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className='container'>
            <div className='card'>
                <div className="top">
                    <img src='#'></img>
                </div>
                <div className="bottom">
                    <h2>title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, saepe velit deserunt similique exercitationem, error quos neque blanditiis aut iusto, numquam a labore ducimus repellendus voluptatibus id. Eum, tempore quam.</p>
                    <h2>category</h2>
                </div>
            </div>
        </div>
    )
}

export default Home
