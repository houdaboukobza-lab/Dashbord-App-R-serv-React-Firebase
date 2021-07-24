import {React} from  'react';
const Login =(props) => {
    const {email,setEmail,password,setPassword,handleLogin,hasAccount,setHasAccount,emailError,passwordError} = props ;
    const mystyle = {
    
      margin: "50px"
     
    };
    
  return (
      <div className="authincation">
      <div className="container p-0">
         <div className="row justify-content-center align-items-center authincation-page-area">
            <div className="col-lg-5 col-md-9" style={mystyle}>
               <div className="authincation-content">
                  <div className="row no-gutters">
                     <div className="col-xl-12">
                        <div className="auth-form">
                           <h3 className="text-center mb-4">
                             <strong>Sign in your account</strong> 
                           </h3>
                           <hr></hr>
                           <br></br>
                           <div className="form-group">
                                    <label className="mb-1">
                                       <strong>Email</strong>
                                    </label>
                                    <input
                                       type="email"
                                       className="form-control"
                                       defaultValue="hello@example.com"
                                       name="Email"
                                       
                                       required value = {email}
            onChange = {(e) => setEmail (e.target.value)} /> </div>
              <p className="errorMsg">{emailError}</p>
            
              
              <div className="form-group">
                                    <label className="mb-1">
                                       <strong>Password</strong>
                                    </label>
                                    <input
                                       type="password"
                                       className="form-control"
                                       defaultValue="Password"
                                       name="password"
                                       required value = {password} 
                                       onChange = {(e) => setPassword (e.target.value)} />
                                    
                                 </div>
              <p className="errorMsg"> {passwordError} </p>
              <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="form-group">
                                       <div className="custom-control custom-checkbox ml-1">
                                          <input
                                             type="checkbox"
                                             className="custom-control-input"
                                             id="basic_checkbox_1"
                                          />
                                          <label
                                             className="custom-control-label"
                                             htmlFor="basic_checkbox_1"
                                          >
                                             Remember my preference
                                          </label>
                                       </div>
                                    </div>
                                   
                                 </div>
              <div className="text-center">
                                    <button 
                                       type="submit"
                                       className="btn btn-primary btn-block" 
                       onClick = {handleLogin}> Sign in </button>    
              </div>

             
            </div>
  
            </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
  
export default Login;