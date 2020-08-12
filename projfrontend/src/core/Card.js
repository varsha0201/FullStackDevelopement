import React from "react";
import ImageHelper from "./helper/imageHelper";
import {Redirect} from "react-router-dom"
//TODO: Deal with this later
const isAuthenticated = true;

const Card = ({
    product,
    addtoCart = true,
    removeFromCard = false
}) => {
    
    const cardTitle = product ? product.name : "A photo from pexels";
    const cardDescription = product ? product.description : "A default description";
    const cardPrice = product ? product.price : "A default price";

    addtoCart = () => {
        if(isAuthenticated){
            console.log("Added to cart");
        } else{
            console.log("login please!");
        }
    };

    const getredirect = redirect =>{
        if(redirect){
            return <Redirect to="/cart"/>;
        }
    };

    const showAddToCart = addtoCart =>{
        return(
            addtoCart && (
                <button
                onClick={addtoCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>
            )
        );
    };

    const showRemoveFromCart = removeFromCard => {
        return(
            removeFromCard &&(
                <button
                onClick={() => {}}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
            )
        );
    };

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cardTitle}</div>
        <div className="card-body">
            <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
           {cardDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">${cardPrice}</p>
          <div className="row">
            <div className="col-12">
                {showAddToCart(addtoCart)}
            </div>
            <div className="col-12">
                {showRemoveFromCart(removeFromCard)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card;