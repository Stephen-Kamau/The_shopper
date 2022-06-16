import React, {Component} from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
// import Dialog from './Dialog';
// import SimpleModal from './modal';

class Entry extends Component{
    render(){
        let itemList =
        [
            {"id":1, "img":"images/category/Accessories.jpg", "desc": "Accessories","category":"Accessories"},
            {"id":2, "img":"images/category/Belts.jpg", "desc": "Belts","category":"Belts"},
            {"id":3, "img":"images/category/sunglasses_and_shades.jpg", "desc": "Sunglasses and Shades","category":"sunglasses_and_shades"},
            {"id":4, "img":"images/category/Jewelry.jpg", "desc": "Jewelry","category":"Jewelry"},
            {"id":5, "img":"images/category/Knives_and_Swords.jpg", "desc": "Knives and Swords","category":"Knives_and_Swords"},
            {"id":6, "img":"images/category/Lotions_and_creams.jpg", "desc": "Lotions and Creams","category":"Lotions_and_creams"},
            {"id":7, "img":"images/category/Padlocks.jpg", "desc": "Padlocks","category":"Padlocks"},
            {"id":8, "img":"images/category/Shoes_and_Sandals.jpg", "desc": "Shoes and Sandals","category":"Shoes_and_Sandals"},
            {"id":9, "img":"images/category/Caps_and_Hats.jpg", "desc": "Caps and Hats","category":"Caps_and_Hats"},
            {"id":10, "img":"images/category/Watches_and_Clocks.jpg", "desc": "Watches and Clocks","category":"Watches_and_Clocks"},
        ].map(item=>{
            const { id, img, desc, category } = item;
            return(

              <div className="four wide column" key={id}>
                <div>
                <Link to={`/products/?category=${category}`}>
                  <div className="ui link cards">
                    <div className="card">

                      <div className="image">
                        <img src={img} alt={desc} />
                      </div>
                      <div className="content">
                        <div className="header text text-bold"><h5>&nbsp;&nbsp;{desc}</h5></div>
                        {/* <div className="meta left-align ml-3">&nbsp;&nbsp;{category}</div> */}
                        <div className="meta price center">
                            {/* <h4>$ {price}</h4> */}
                          &nbsp;&nbsp;&nbsp;
                          {/* <span to="/" className="btn-floating mt-1.5 waves-effect waves-light red align-left" */}
                            {/* onClick={()=>{this.handleClick(id)}}><i className="material-icons">add</i></span> */}

                        </div>

                      </div>
                  </div>
                </div>
                </Link>.

                </div>
              </div>

            )
        });


        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
                {
                  // <SimpleModal></SimpleModal>
                /* <Dialog id={34} ></Dialog>
                */}
            </div>
        )
    }
}



export default Entry;

// render(){
//     let itemList =
//         [
//             {"id":1, "img":"../images/category/padis.jpg", "desc": "this is a normal padlock"},
//             {"id":2, "img":"../images/category/beltas.jpg", "desc": "this is a normal Belts"},
//             {"id":3, "img":"../images/category/sunglassas.jpg", "desc": "this is a normal sunglasses"},
//         ]
//     return(
//     <div className='container'>
//         <div className='row'>
//             {/* <br></br>
//             <br></br> */}
//             <h3 className="brand-logo center">
//                 Shopping
//             </h3>
//         </div>
//         <div className='ui cards row'>

//             {/* single image */}
//             <div className='col s3  offset+s3 m4'>
//                 <div className='card'>
//                     {/* deatils goes here */}
//                     <div className="image">
//                         <img src={"/images/category/padis.jpg"} alt={itemList[0]['desc']}
//                         className="responsive-img" widht='auto'></img>
//                     </div>
//                     <div className='content'>
//                         <div className='desc header center'>
//                             <p>
//                             {itemList[0]["desc"]}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* single image */}
//             <div className="col s3  offset+s3 m4">
//                 <div className='card'>
//                     {/* deatils goes here */}
//                     <div className="image">
//                         <img src={require("../images/category/beltas.jpg")} alt={itemList[2]['desc']}
//                         className="responsive-img" widht='auto'></img>
//                     </div>
//                     <div className='content'>
//                         <div className='desc header center'>
//                             <p>
//                             {itemList[1]["desc"]}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* single image */}
//             <div className="col s3 m4 offset+s4">
//                 <div className='card'>
//                     {/* deatils goes here */}
//                     <div className="image">
//                         <img src={require("../images/category/sunglassas.jpg")} alt={itemList[2]['desc']}
//                         className="responsive-img" widht='auto'></img>
//                     </div>
//                     <div className='content'>
//                         <div className='desc header center'>
//                             <p>
//                             {itemList[2]["desc"]}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     </div>
//     )
// }


//     return(
//         <div className="container">
//             <h3 className="center">Our items</h3>
//             <div className="box">
//                 {itemList}
//             </div>
//         </div>
//     )
// }

// return(
//     <div className="container">
//         <div className='row'>
//             <br></br>
//             <br></br>
//         </div>

//         <div className='row'>

//         {/* add a image */}
//         <div class="col s3 offset+s3">
//             <img src={require("../images/category/padis.jpg")}
//             width='auto' alt="name" className="responsive-img"/>
//         </div>
//         {/* end of the image */}

//         {/* add a image */}
//         <div class="col s3 offset+s3">
//             <img src={require("../images/category/beltas.jpg")}
//             width='auto' alt="name" className="responsive-img"/>
//         </div>
//         {/* end of the image */}

//         {/* add a image */}
//         <div class="col s3 offset+s3">
//             <img src={require("../images/category/sunglassas.jpg")}
//             width='auto' alt="name" className="responsive-img"/>
//         </div>
//         {/* end of the image */}


//         </div>
//     </div>
// )
