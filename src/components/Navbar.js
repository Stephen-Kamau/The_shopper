// import React from 'react';
import { Link } from 'react-router-dom'
import React, { Component } from 'react'


class Navbar extends Component{
  render(){
    return(
      <div>
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">The Shopper</Link>

                <ul className="right">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/signup">signup</Link></li>
                    {/* {this.props.state} */}
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
