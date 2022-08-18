export const validate = (data,type)=>{
    const erorrs={};


  
    if(!data.email){
        erorrs.email='Email required'

    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        erorrs.email="Email address is invalid"
        
    }else{
        delete erorrs.email
    }

    if(!data.password){
        erorrs.password="password is required"
    }else if(data.password.length < 6){
        erorrs.password=" password need to be 6 character more"

    }
    else{
        delete erorrs.password
    }
    

    if(type==="signUp"){
        if(!data.name.trim()){
            erorrs.name="Username required"
        }else{
            delete erorrs.name
        }

        
    if (!data.confirmPassword) {
        erorrs.confirmPassword='Confirm the password'
        
    }
    else if(data.confirmPassword !== data.password){
        erorrs.confirmPassword="Password donot mutch"

    }
    else{
        delete erorrs.confirmPassword
    }
 
    if(data.isAccepted){
        delete erorrs.isAccepted

    }else{
        erorrs.isAccepted="Accept our regulations"
    }

    }

return erorrs


}