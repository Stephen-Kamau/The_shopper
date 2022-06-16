import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Entry from './components/Entry'
import Login from './components/Login'
import Signup from './components/Register'
// import ProductDetails from './components/ProductDetails'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Entry}/>
                    {/* <Route path="/product/:productId" component={ProductDetails} /> */}
                    <Route path="/cart" component={Cart}/>
                    <Route path="/products" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                  </Switch>
             </div>
       </BrowserRouter>

    );
  }
}

export default App;
