import React from 'react';
import "./main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main ()
{
return(
    
   <div>
      <div className='cbit-logo'>
      <img className='cbit-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xQaOiAIOywnDP4uCIzNVfy097Ccv-bZZnA&usqp=CAU" alt="Chaitanya Bharathi Institute of Technology, Hyderabad"></img>
      </div>
      <div>
            <nav className='navbar'>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="#">Signup</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
            </ul>
        </nav>
       </div>
                              <div className="Sign-up-form">
                                  <img className="img-class" src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png" alt=""></img>
                                  <h1>Sign Up Now</h1>
                                  <form>
                                  <input type="email" className="input-box" placeholder="Your Email"></input>
                                  <input type="password" className="input-box" placeholder="Your Password"></input>
                                  <br></br>
                                  <p style={{display: 'inline-block'}}><span><input type="checkbox"></input></span>I agree to the terms of services</p>
                                  <button type="button" className="Signup-btn">Sign up</button>
                                  
                                  <p className="or">OR</p>
                                  <p>Do You Have an Account?<a href="Signin">Sign in</a></p>
                                  </form>
                              </div>
   </div>
);
}
export default Main;