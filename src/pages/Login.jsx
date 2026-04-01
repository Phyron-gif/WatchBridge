
import { useContext, useState } from "react"
import {  useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import { AuthContext } from "../AuthContext"



function Login(){
    
    const navigate = useNavigate()
    const [state, setState]=useState('signup')
   const {register, handleSubmit,formState:{errors}} = useForm()
   const {user, setUser}= useContext(AuthContext)
    function onSubmit(data){
        setUser({
            name:data.name,
            email:data.email
        })

        
        setState('signup')
        
        navigate('/opportunities')
        
    }
    return(
        <>
        <div className="bg-slate-300 min-h-screen flex items-center justify-center">
           
                <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg" onSubmit={handleSubmit(onSubmit)}>


                        <h1  className="text-2xl text-gray-800 font-bold mb-2 text-center">{state==='login'&& <p>Welcome back {user.name}!</p>}</h1>
                         <h3 className="text-gray-500 text-sm mb-6 text-center">{state==='login'?'Please enter your details to login' :
                         <span className="text-lg text-green-900">Please enter your details to sign up </span>}</h3>

                   {state==='signup'&& <div>
                        <input
                            {...register('name',{required:'First name is required',
                                minLength:{
                                    value:3,
                                    message:'Enter a valid name'

                                }
                                    
                            } )}
                            className="px-4 py-3  border border-gray-300 rounded-full 
                            focus:outline-none  " 
                            type="text"
                            placeholder=" First Name"
                        />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                        <input
                            {...register('lname',{required:'Last name is required',
                                minLength:{
                                    value:3,
                                    message:'Enter a valid name'

                                }
                                   
                            } )}
                            className="px-4 py-3  border border-gray-300 rounded-full 
                            focus:outline-none mt-4 " 
                            type="text"
                            placeholder=" Last Name"
                        />
                        {errors.lname && <p className="text-red-500">{errors.lname.message}</p>}
                   </div>
                  
                    } 

                        <input
                            {...register('email',{required:'Email is required', } )}
                           

                            className="px-4 py-3 mt-4 border border-gray-300 rounded-full 
                            focus:outline-none " 
                            type="email"
                            placeholder="Enter email"
                        />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                         
                        <input
                              {...register('password',{required:'Password is required',
                                 minLength:{
                                    value:6,
                                    message:'Password must be atleast 6 characters'

                                },
                                    maxLength:{
                                    value:12,
                                    message:'Password must be less than 12 characters'

                                    }
                              } )}
                            className="px-4 py-3  border border-gray-300 rounded-full 
                            focus:outline-none mt-4 " 
                            type="password" 
                            placeholder="Enter password"
                        />
                             {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        <div>
                        <button 
                             type='submit'
                                
                             className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg 
                             shadow-md hover:bg-green-700 active:scale-95 
                             transition duration-200 mt-4 cursor-pointer" >
                            
                                {state==='login'? 'Login': 'Sign up'}  
                        </button>
                        </div>
                        {state==='login'? <p className="mt-4">Don't have an account? <span onClick={()=> setState('signup')} className="text-blue-500 cursor-pointer">Signup</span></p>:<p className="mt-4">Already have an account? <span onClick={()=>setState('login')} className="text-blue-500 cursor-pointer">Login</span></p>}
                        

                    
                </form>
            </div>


       
     
        
        </>
    )
}
export default Login