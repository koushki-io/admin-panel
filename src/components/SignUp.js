import React, { useEffect, useState } from 'react'
import { validate } from './Validate'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from './signUp.module.css'
import { Link } from 'react-router-dom';




const SignUp = () => {
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
        seterorr(validate(data,"signUp"))
       
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
            <h2 className={styles.header}>Sign Up</h2>
            
            
            
          
     
            
            <div className={styles.formFild}> 
                <label>name</label>
                <input
                 className={(touched.name && erorr.name ) ? styles.uncompleted  : styles.formInput }
                type="text" name='name' value={data.name} onChange={chaneHandler}  onFocus={focusHandler}/>
                {touched.name && erorr.name && <span style={{color:"red"}}>{erorr.name}</span>}
            </div>

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

            <div className={styles.formFild}>
                <label>confirmPassword</label>
                <input
                className={(touched.confirmPassword && erorr.confirmPassword ) ? styles.uncompleted  : styles.formInput }

                type="password" name='confirmPassword' value={data.confirmPassword} onChange={chaneHandler}  onFocus={focusHandler}/>
                {touched.confirmPassword && erorr.confirmPassword &&  <span style={{color:"red"}}>{erorr.confirmPassword}</span>}

            </div>

            <div className={styles.formFild}>

                    <div className={styles.checkBoxContainer}>
                <label>I accet terms of privacy policy  </label>
                <input
                className={styles.checkbox}

                type="checkbox" name='isAccepted'  onChange={chaneHandler} value={data.isAccepted}  onFocus={focusHandler}/>

                    </div>
                {touched.isAccepted && erorr.isAccepted &&  <span style={{color:"red"}}>{erorr.isAccepted}</span>}

            </div>  
            <div className={styles.formButtons}>
                
                <Link to="/Login">Login</Link>
                
                <button type='submit'>Sign up</button>
            </div>

            

           
        </form>
        <ToastContainer/>
    </div>
  )
}

export default SignUp