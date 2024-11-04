import {create} from "zustand"


const initialState = [
    {
        id: 1,
        price: '5000',
        name: 'phone'
    },
    {
        id: 2,
        price: '7000',
        name: "macbook"
    }
]

export const useEcommerceStore = create((set)=>({
   products: initialState,
   cart: {},
   updateCart: (cart:any[])=> set({cart})
}))