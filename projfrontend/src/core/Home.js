import React, { useState, useEffect } from "react";

import {getProducts} from "./helper/coreapicalls";
import Base from './Base';
import Card from './Card';

import "../styles.css";

export default function Home(){

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () => {
        getProducts()
        .then(data => {
            if(data.error){
                setError(data.error);
                console.log(error);
            }else{
                setProducts(data);
                //console.log(data);
            }
        });

    };
    useEffect(()=>{
        loadAllProducts();
    }, []);
    return(
        <div>
            <h1>Home component</h1>
            <div className="row">
                {products.map((product, index)=> {
                    return(
                        <div key={index}>
                            <h1>{product.name}</h1>
                            <h2>{product.description}</h2>
                            <h2>{product.price}</h2>
                        </div>
                    );
                })}
            </div>
        </div>

        // working fine

        // <Base title="Home Page" description="Welcome to Tshirt store">
        //     <h1>Home component</h1>
        //     <div className="row">
        //         {products.map((product, index)=>{
        //             return(
        //                 <div key={index}>
        //                     <h1>{product.name} test</h1>
        //                 </div>
        //             );
        //         })}
        //     </div>
        // </Base>
    );
}

