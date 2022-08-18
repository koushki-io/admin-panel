import React from 'react'
import "./newProduct.css"

const NewProduct = () => {
  return (
    <div className='newProduct'>
        <h1>New Product</h1>
        <form>

            <div className="add-product-item">
                <label>Image</label>
                <input type="file" id='file' />
            </div>

            <div className="add-product-item">
                <label>name</label>
                <input type="text" placeholder='Apple Airpod' />
            </div>

            <div className="add-product-item">
                <label>Stock</label>
                <input type="number"  placeholder='123' />
            </div>

            <div className="add-product-item">
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select>
            </div>

            <button className="add-product-btn">
                Create
            </button>

        </form>
    </div>
  )
}

export default NewProduct