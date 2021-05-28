import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input }
	from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } 
  from 'react-social-login-buttons';
import img1 from './Image/logo.png';
import background from "./Image/back.jpg";


class App extends Component {
  render (){
    return (     
      <Form className="login-form">
        <div className="container" style=
        {{ backgroundImage: `url(${background})`,
         backgroundSize: "500px", 
         backgroundPositionY: "-165px",
         boxShadow: "3px 5px 3px #9E9E9E",
          width: "500px"}}>
        <div>
         <img src={img1} style={{width: 300, height:100, marginLeft: 80}}/>  
         </div>
         <div className="text-center pt-3">  </div>
        <h3 className="text-center" style={{backgroundColor:'#fbf8be', opacity:'0.7', color:"#234e70", fontWeight:'bold'}}> ONE IN A MILLION </h3>
        <h5 className="text-center" style={{backgroundColor:'#fbf8be', opacity:'0.5', color:"#234e70"}}> Twice - Community </h5>
         <FormGroup>
           <Label style={{ color:"#234e70", fontWeight:'bold'}}> Email: </Label>
           <Input style={{borderWidth: 1, borderColor: '#000000', backgroundColor: 'rgba(0,0,0,0)'}} type="email" placeholder="Email"/>
          </FormGroup>
          <FormGroup>
           <Label style={{ color:"#234e70", fontWeight:'bold'}}> Password: </Label>
           <Input style={{borderWidth: 1, borderColor: '#000000', backgroundColor: 'rgba(0,0,0,0)'}} type="password" placeholder="Password"/>
          </FormGroup>
          <div className="text-center pt-3">  </div>
          <div className="text-center pt-1"> 
          <Button className="btn-lg btn-block" style={{backgroundColor:"#fbf8be", color:"#234e70"}}> Log In </Button> </div>
          <div className="text-center pt-3" style={{color:"#fbf8be"}}> Or continue with your social account </div>
          <div className="container">
          <FacebookLoginButton/> <GoogleLoginButton/> <GithubLoginButton/>
          </div>
          <div className="text-center pt-3>" style={{color:"#fbf8be"}}>
            <a href="/sign-up" style={{color:"#fbf8be"}}> Sign up </a>
            <span className="p-2"> | </span>
            <a href="/sign-up" style={{color:"#fbf8be"}}> Forgot Password </a>
          </div>
          </div>
      </Form>
      
    );
  }
}

export default App;