import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { Link } from "react-router-dom";
 class Home extends Component{

    handleClick = (id)=>{
        this.props.addToCart(id);
    }



    render(){
      let filterCat = this.props.location.search.split("=")[1];
      const filterdGoods = this.props.items.filter(item => item.category.includes(filterCat))
        let itemList = filterdGoods.map(item=>{
            const { id, item_type,description,title, price, image, quantity, category, shoe_size } = item;
            console.log(`Hi there show  ${shoe_size}`);
            return(

              <div className="four wide column" key={id}>
                <div>
                  <div className="ui link cards">
                    <div className="card">
                      <div className="image">
                        <img src={`/images/image/${image}`} alt={title} />
                      </div>
                      <div className="content">
                        <div className="header">
                          <center>
                          &nbsp;&nbsp;{title}
                          </center>
                        </div>
                        {/* <div className="meta left-align ml-3">&nbsp;&nbsp;{category}</div> */}
                        <div className="meta price center"><h4>Kshs. {price}</h4>
                          &nbsp;&nbsp;&nbsp;

                          {
                            shoe_size ==="None"? 
                            <span to="/" className="btn-floating mt-1.5 waves-effect waves-light red align-left"
                            onClick={()=>{this.handleClick(id)}}><i className="material-icons">add</i></span>
                            
                            : <Link to={`/product/${id}`}>
                              <button className="btn btn-info">Select</button>
                            </Link>
                          }

                          {/* <span to="/" className="btn-floating mt-1.5 waves-effect waves-light red align-left"
                            onClick={()=>{this.handleClick(id)}}><i className="material-icons">add</i></span> */}

                        </div>

                      </div>
                  </div>
                </div>
                </div>
              </div>

            )
        });


        return(
            <div className="container">
                <h3 className="center">{filterCat.replaceAll("_"," ")}</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
