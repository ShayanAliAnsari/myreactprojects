import React, { Component } from 'react';
import './Form.css';

class Form extends Component{

constructor(props){
 super(props);

 this.state = { 
         fullname: "vinodthapa",
           email: "Enter your email ID",
         phone : "9876543211",
            message : "hellow"

  }
}

// handlename = (event) => {
  
//   this.setState({ fullname: event.target.value })
// }

// handleemail = (event) => {
  
//   this.setState({ email: event.target.value })
// }

// handlenumber = (event) => {
  
//   this.setState({ number: event.target.value })
// }

// handlemessage = (event) => {
  
//   this.setState({ message: event.target.value })
// }

handlechangeall = (event) =>{
 this.setState ( { [event.target.name] :event.target.value  } )
}

handlesubmit = (event) => {
 alert (`my name is ${this.state.fullname}. 
  My email id is ${this.state.email}
  My mobile number is ${this.state.phone}.
  My message to your company is ${this.state.message}
  `);
 // alert( JSON.stringify(this.state));
 console.log( JSON.stringify(this.state));
 event.preventDefault();
}

render(){
 return(
  <div>
   <form onSubmit = {this.handlesubmit} >
    <label> fullname </label>
    <input  type="text" name="fullname"  value={this.state.fullname}  
      onChange={this.handlechangeall} /> <br/>

    <label> Email </label><br/>
    <input  type="email" name="email" value= {this.state.email} 
      onChange={this.handlechangeall} /> <br/>

    <label> Mobile </label><br/>
    <input  type="number" name="phone" value= {this.state.phone} 
            onChange={this.handlechangeall} /> <br/>

    <label> Message </label>
    <textarea  value= {this.state.message}  name="message"
            onChange={this.handlechangeall} />   <br/>

    <input type="submit" value="Send" />
   </form>
  </div>
 )
}

}

export default Form;

