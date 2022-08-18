import React, { useEffect } from 'react'
import './products.css'
import {DeleteOutline} from '@mui/icons-material';
import {productRows, productsData} from '../../../Data/data'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Products = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
  const getdat=async()=>{
        setdata(await productsData())
  }

  getdat()
  
  }, [])
  const removeHandler=(id)=>{
    setdata(data.filter(item=>item.id !==id ))
  }

  const columns: GridColDef[] =[
     { field: 'id', headerName: 'ID', width: 100 },
     { field: 'image', headerName: 'product', width: 250,
    renderCell:(params)=>{
         return( <div className="product-list-img">
            <img src={params.row.image} alt="product" />
            <span>{params.row.title}</span>
          </div>)
    }
    },
     { field: 'rating', headerName: 'Stock', width: 100,
    renderCell:(params)=>{
     const count=params.row.rating.count
     return count

    }
    },
     { field:'price', headerName: 'Price', width: 100, },
     {
      field: 'actio',
      headerName: 'action',
      width: 150,
      renderCell:(params)=>{
          return(
              <>
              <Link
              to={`/products/${params.row.id}`}
              ><button className='product-edite'>
                  edit
              </button> </Link>
              
              <DeleteOutline
              onClick={()=>removeHandler(params.row.id)}
              className='product-remove'/>
              </>
          )

      }
   
    },
     
     
     
  ]

  return (
    <div className='Products'>
      
      <DataGrid 
      disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />



    </div>
  )
}

export default Products