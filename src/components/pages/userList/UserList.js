import React,{useState} from 'react'
import './userList.css'
import {DeleteOutline} from '@mui/icons-material';
import {userRows} from '../../../Data/data'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';



const UserList = () => {
    const [data, setdata] = useState(userRows)

    const removeHandler=(id)=>{
        setdata(data.filter(item=>item.id !==id))
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'user', headerName: 'User Name', width: 200 ,renderCell:(params)=>{
                    return(
                        <div className="userListUser">
                        <img src={params.row.avatar} alt="avatar" />
                        {params.row.username}
                        </div>
                    )
        } },
        { field: 'email', headerName: 'Emali', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 100,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 150
       
        },
        {
            field: 'actio',
            headerName: 'action',
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                    <Link
                    to={`/users/${params.row.id}`}
                    ><button className='user-edite'>
                        edit
                    </button> </Link>
                    
                    <DeleteOutline
                    onClick={()=>removeHandler(params.row.id)}
                    className='user-remove'/>
                    </>
                )
    
            }
         
          },
      ];
  return (
    <div className='UserList'>


<div style={{ height: 500, width: '100%' }}>
      <DataGrid 
      disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>


    </div>
  )
}

export default UserList