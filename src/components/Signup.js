
import React,{useState} from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
//import Popup from './Popup';

const validate=values=>{
    const errors={};
    if(!values.firstName){
    errors.firstName="*Required";
    }
    else if(values.firstName.length > 8){
    errors.firstName= "must be enter 8 characters or less ";
    }
  
    if(!values.lastName){
      errors.lastName="*Required";
      }
      else if(values.lastName.length > 8){
      errors.lastName= "must be enter 8 characters or less ";
      }
  
      if(!values.email){
        errors.email="*Required";
      }
      else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email="invalid email address";
      }
      if(!values.password){
        errors.password="*Required";
        }
        else if(values.password.length > 8){
        errors.password= "maximum 8 characters";
        }
        else if(values.password.length < 3){
          errors.password="minimum 5 character required"
        }
        if(!values.confirmPassword){
          errors.confirmPassword="*Required"
        }
        else if(values.password!==values.confirmPassword){
          errors.confirmPassword="* password does not match"
        }
      return errors;
  }
const Signup=()=>{


    const navigate=useNavigate()
    const [bool,setBool]=useState(0);
  const formik = useFormik (
    {    
    initialValues:{
      firstName: '',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:'',
    },
    validate,
   onSubmit:(values,{resetForm})=>{
          if(bool){
            setBool(0);
            resetForm({values : ''});
          }
          else{
            setBool(1);
            console.log(values)
          }
         let userInfo= [];
         let userdtlaarr = JSON.parse(window.localStorage.getItem("userdetails"));
         userdtlaarr = userdtlaarr == null ? [] : userdtlaarr;
        //  userdtlaarr = userdtlaarr ? window.localStorage.setItem("userdetails", JSON.stringify([])) : userdtlaarr;

         let updatedArr = [];
         console.log(userdtlaarr);
         userInfo.push(values);
         updatedArr = [...userdtlaarr,...userInfo];
        //console.log("userInfo",updatedArr);
           window.localStorage.setItem("userdetails", JSON.stringify(updatedArr));
         
       
    navigate('/product')
    }});
    const back=()=>{
      navigate('/')
    }

    
    // onSubmit :(values,{resetForm})=>{
    //       if(bool){
    //         setBool(0);
    //         resetForm({values : ''});
    //       }
    //       else{
    //         setBool(1);
    //         console.log(values)
    //       }
    // navigate('/product')
    // }

return (
    <>
    <div className='main'>
      <div className='signup-form'>
        <h2>Signup page</h2>
        <form onSubmit={formik.handleSubmit}>
          <input type="text" placeholder='Enter your firstname' name='firstName' autoComplete='off' onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur}/>
           {
             formik.touched.firstName && formik.errors.firstName ? <span> {formik.errors.firstName }</span> : 
             null
             }

          <input type="text" placeholder='Enter your lastname' name='lastName' autoComplete='off' onChange={formik.handleChange} value={formik.values.lastNametName} onBlur={formik.handleBlur}/>
          {
             formik.touched.lastName && formik.errors.lastName ? <span> {formik.errors.lastName }
             </span> : null
             }
          <input type="text" placeholder='Enter your email' name='email' autoComplete='off' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
          {
             formik.touched.email && formik.errors.email ? <span> {formik.errors.email }
             </span> : null
             }
          <input type="password" placeholder='Enter your password' name='password' autoComplete='off' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
          {
             formik.touched.password && formik.errors.password ? <span> {formik.errors.password }
             </span> : null
             }
          <input type="password" placeholder='Enter your confirm password' name='confirmPassword' autoComplete='off' onChange={formik.handleChange} value={formik.values.confirmPassword} onBlur={formik.handleBlur}/>
          {
             formik.touched.confirmPassword && formik.errors.confirmPassword ? <span> {formik.errors.confirmPassword }
             </span> : null
             }
          <input type='submit' value="submit" />
          <br/>
          <button onClick={back} className='btn'>Back</button>
                  </form>
      </div>
    </div>
    {/* <div className='message-box'>
      {
      bool ? (<Popup onClick={formik.handleSubmit} />): null
      };

    </div>  */}
    </>
  );

}
export default Signup