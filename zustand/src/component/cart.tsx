



"use client";

import { useEcommerceStore } from "@/store/ecommerce-store";
// import { useEcommerceStore } from "@/store/ecommerce-example-store";
import { useCallback } from "react";

export default function Cart() {
    const products = useEcommerceStore((store) => store.products);

    const cart = useEcommerceStore((store) => store.cart);
    const update = useEcommerceStore((store) => store.updateCart);


const addToCart = (product)=>{
       if([product.id] in cart){
             cart[product.id].qty =   cart[product.id].qty + 1
       }else{
        let newCart = {...product,qty:1}
cart[product.id] = newCart
       }
       update(cart)
       
}
   
    
    return (
        <>
            {products.map((product:any) => (
                <div key={product.id} style={{ border: "1px solid black", width: "20%", margin: "15px", padding: "15px", textAlign: 'center' }}>
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                    <button onClick={() => {addToCart(product)  }}>Add To Cart</button>
                </div>
            ))}
        </>

    )
}