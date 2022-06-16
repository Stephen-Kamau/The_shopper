import React , {Component , useState} from 'react';
import connect from 'react-redux';

class Signup extends Component{
    state ={
      email:"",
      password:""
    }
  HandleSubmit = (e)=> {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/v1/register" , {
      method :"POST",
      headers : {"Content-Type":"application/json"},
      body : JSON.stringify(this.state)
    })
    .then(
      data => data.json()
    )
    .then(
      data =>{
        console.log(data)
      }
    )
    .catch(
      err => {
        console.log("Error ois  " , err)
      }
    )
  };
  HandleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  render(){
    return(
      <div className='container dflex'>
        <br />
        <br />
        <form className='form mt-3' onSubmit= {this.HandleSubmit}>
        <div className="form-group">
          <label >First Name</label>
          <input type="text"
            className="form-control"
            name ='firstname'
            placeholder="Enter First name"
            onChange = {this.HandleChange}
            />
        </div>
        <div className="form-group">
          <label >Last Name</label>
          <input type="text"
            className="form-control"
            name ='lastname'
            placeholder="Enter Last name"
            onChange = {this.HandleChange}
            />
        </div>
        <div className="form-group">
          <label >Email</label>
          <input type="email"
            className="form-control"
            name ='email'
            placeholder="Enter email"
            onChange = {this.HandleChange}
            />
        </div>
        <div className="form-group">
          <label >Password</label>
          <input type="password"
            className="form-control"
            name ='password'
            placeholder="Password"
            onChange = {this.HandleChange}
            />
        </div>
        <button type="submit"  className="btn btn-primary">
          SignUp
        </button>
      </form>
      </div>
    );
  }
}

export default Signup;
