import React, { Component } from 'react'
import { connect } from 'react-redux'
import { placeOrder } from './actions/cartActions'
class Recipe extends Component{

    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    handleCheckout = (e) =>{
      let total_cost = this.props.total;
      this.props.placeOrderItems();
      let res = `You have ordered All items at a cost of     ${total_cost}. Please prepaire for payments`;
      console.log(res)
      alert(res);

    }

    render(){

        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn" onClick={this.handleCheckout}>Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        placeOrderItems: ()=>{dispatch({type:'PLACE_ORDER'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
