import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar";
import Image from 'next/image';

export default function Index(){

    const [product, setProduct] = useState(null);
    useEffect(() => {
        setProduct(JSON.parse(localStorage.getItem("selected_product")))
        console.log(product)
    }, []);

    return (
        <div>
            {product && 
            <>
            <Navbar/>
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <span>{product.price}</span>
            <Image width="100%" height="100%" src={product.img} alt=""/>
            </>
            }
        </div>
    )
}