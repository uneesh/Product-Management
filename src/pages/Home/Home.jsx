import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
 const Home=()=> {

const [ products,setProducts ] =  useState([])
const fetchProduct= async()=>{
    const response = await axios.get("https://652fbbea6c756603295d92aa.mockapi.io/productInfo")
    
    setProducts(response.data);
    console.log(products);
    
  }

useEffect(()=>{fetchProduct()},[])
 



  return (
    <>
    <h2>Welcome to homepage for Product Management System</h2>
    {
      products.map((product)=>{
            <div key={product.id} className="card">
        <img src="your-image.jpg" alt="Card Image"/>
        <div className="card-content">
            <h3>product.productTitle</h3>
            <p>product.productDescription</p>
        </div>
        </div>
      })
    }

    </>
  )
}

export default Home