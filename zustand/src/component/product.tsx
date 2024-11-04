"use client";

import { useEcommerceStore } from "@/store/ecommerce-store";

export default function Products() {

const {cart} = useEcommerceStore()
    // console.log(cartlist);

    console.log(cart);
    
let values = Object.values(cart)

let grandTotalPrice = values.reduce(
    (prevPrice, { price, qty }) => price * qty + prevPrice,
    0
  );


    return (
       <>
       
       <h1>Hello Products</h1>
{/* <table>
    <tr>
        <th>Name</th>
        <th>Price</th>
        <th>qty</th>
    </tr>


{
    Object.keys(cart).map((key)=>(
            <tr key={cart[key].id}>
                <td>{cart[key].name}</td>
                <td>{cart[key].price}</td>
                <td>{cart[key].qty}</td>

            </tr>
    ))
}

</table> */}



<div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>

        {Object.keys(cart).map((key) => (
          <tr>
            <td>{cart[key].name}</td>
            <td>{cart[key].price}</td>
            <td>{cart[key].qty}</td>
            <td>{cart[key].price * cart[key].qty}</td>
          </tr>
        ))}

        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>{grandTotalPrice}</th>
        </tr>
      </table>
    </div>
       </>

    )
}