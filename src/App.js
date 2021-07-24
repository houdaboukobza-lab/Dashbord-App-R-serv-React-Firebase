
import React , {useState, useEffect} from "react" ;
import {fire} from "./fire";
import Login from './Login' ;
import "./App.css";
import  Hero from './Hero';

const App = () =>{ 
   const [user, setUser] = useState('');
   const [email, setEmail] = useState ('');
   const [password, setPassword] = useState ('');
   const [emailError, setEmailError] = useState ('');
   const [passwordError, setPasswordError] = useState ('');
   const [hasAccount, setHasAccount] =  useState(false);
   const clearInputs =() => {
       setEmail ('');
       setPassword ('');
   }
   const clearErrors = () => {
         setEmailError ('') ;
         setPasswordError ('') ;                                                                
       
   }
   const handleLogin = () => {
    clearErrors();
    

       fire.auth()   
       .signInWithEmailAndPassword (email ,password)
       .catch ((err) => {
         switch (err.code) {
               case "auth/invalid-email":
               case "auth/user-disabled":
               case "auth/user-not-found":
                setEmailError(err.message);
                break; 
                case "auth/wrong-password" :
                   setPasswordError(err.message); 
                   break;
           }
       });
 }; 
 const handlelogout = () =>{
     fire.auth().signOut();};
     
 const authListenner = () => {
    fire.auth().onAuthStateChanged( user => {
        if (user){
            clearInputs();
            setUser(user);
        } else {
        setUser ("");
        }
    });
};
   useEffect (() => {
   authListenner ();
   } , []) ; 
//   const [searchTerm , setSearch]= useState("");
//   const searchHandler =() => {};
   
   return (
        <div className = "App"> 
        { user ? (
             <Hero handleLogout={handlelogout}/>   
        ) :  (
            <Login 
            email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword= {setPassword} 
            handleLogin = {handleLogin} 
            hasAccount = {hasAccount} 
            setHasAccount ={setHasAccount}
            emailError = {emailError}
            passwordError={passwordError}
            
            />
            
        ) }
       
        </div>
    );
};

export default App ;
