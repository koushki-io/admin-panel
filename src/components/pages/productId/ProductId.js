import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './productId.css'
import Chart from '../../chart/Chart'
import {UserData2} from '../../../Data/data'
import axios from 'axios'
import { useEffect } from 'react'
import {Publish} from '@mui/icons-material'
import { useState } from 'react'





const ProductId = () => {
   const {id}= useParams()
  const navigate= useNavigate()
  const [product, setproduct] = useState({})

  useEffect(() => {
    const getData=async()=>{
        const {data}= await axios.get(`https://fakestoreapi.com/products/${id}`)
        setproduct(data)
    }
    getData()

  }, [])
  
  return (
    <div className='ProductId'>
        <div className="product-container">
        <h1>Product</h1>
        <button onClick={()=>{
            navigate("/newProduct")
        }}

        className="prduct-add-btn">Create</button>
       

        </div>
        <div className="product-top">
            <div className="product-top-left">
                <Chart  UserData={UserData2}
                 dataKey1="uv"
                 dataKey2="pv"
                title="Sales Performance"
                />
            </div>
            <div className="product-top-right">
                    <div className="product-top-info">
                        <img src={product.image} alt="product" />
                        <span>{product.title}</span>
                    </div>
                    <div className="product-info-bottom">

                        <div className="product-info-item">
                            <span className='infoKey'>id: </span>
                            <span className='infoValue'>{product.id}</span>
                        </div>

                        <div className="product-info-item">
                            <span className='infoKey'>sale: </span>
                            <span className='infoValue'>{product.price}</span>
                        </div>

                        <div className="product-info-item">
                            <span className='infoKey'>active: </span>
                            <span className='infoValue'>yes</span>
                        </div>

                     

                        <div className="product-info-item">
                            <span className='infoKey'>Stock: </span>
                            <span className='infoValue'>34</span>
                        </div>


                    </div>
            </div>

        </div>
            <div className="product-bottom">
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className="productForm-left">
                        <label>Product Name</label>
                        <input type="text" name='productname' 
                        placeholder={product.title}
                        />
                        <label>In Stock</label>
                        <select name="instock" id="instock">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                        <label>Active</label>
                        <select name="instoactiveck" id="active">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>

                    </div>
                    <div className="productForm-right">
                        <div className="product-upload">
                            <img src={product.image} alt="product" />
                            <label htmlFor="file">
                                <Publish/>
                            </label>
                            <input type="file" name='file' id='file' style={{display:"none"}} />
                        </div>

                        <button className="product-btn">
                            Update
                        </button>
                    </div>
                </form>
            </div>
    </div>
    
  )
}

export default ProductId