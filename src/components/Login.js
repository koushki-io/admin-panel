import React, { useEffect, useState } from 'react'
import { validate } from './Validate'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from './signUp.module.css'
import { Link } from 'react-router-dom';




const Login = () => {
    const [data, setdata] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted: false,

    })      
    const [erorr, seterorr] = useState({})
    const [touched, settouched] = useState({})
    useEffect(() => {
        seterorr(validate(data,"login"))

        
       
    }, [data,touched])


    const chaneHandler=(e)=>{
        if(e.target.name==='isAccepted'){
            setdata({...data,[e.target.name]: e.target.checked})
        }
        else{
            setdata({...data,[e.target.name]:e.target.value})
        }
        

        
    }
    const focusHandler=(e)=>{
        settouched({...touched,
        [e.target.name]:true,

        })

    }

    const submitHandler=(e)=>{
        e.preventDefault()
        
        if(!Object.keys(erorr).length){
         
          notify("You signed in successFully","success")
        }else{
            notify("Invalid data!","Error")
            settouched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true
            })
        }

     

    }


       
    
   
          
    return (
    <div className={styles.container}> 
        <form className={styles.formContainer} onSubmit={submitHandler} >
            <h2 className={styles.header}>Login</h2>
            

            <div className={styles.formFild}>
                <label>email</label>
                <input 
                className={(touched.email && erorr.email ) ? styles.uncompleted  : styles.formInput }
                type="text" name='email' value={data.email} onChange={chaneHandler}  onFocus={focusHandler}/>
                {touched.email && erorr.email &&  <span style={{color:"red"}}>{erorr.email}</span>}
            </div>

            <div className={styles.formFild}>
                <label>password</label>
                <input
                className={(touched.password && erorr.password ) ? styles.uncompleted  : styles.formInput }
                
                type="password" name='password' value={data.password} onChange={chaneHandler}  onFocus={focusHandler}/>
                {touched.password && erorr.password &&  <span style={{color:"red"}}>{erorr.password}</span>}

            </div>

           

          
            <div className={styles.formButtons}>
               
                <Link to="/signUp">Sign Up</Link>
                <button type='submit'>Login</button>
            </div>

            

           
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Login