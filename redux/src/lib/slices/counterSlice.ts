// import { createSlice } from "@reduxjs/toolkit";



// const counterSlice = createSlice({
//     name:"counter",
//     initialState:{
//         count: 0
//     },
//     reducers:{
//         increament: (state)=>{
//             state.count +=  1 
//         },
//         decreament: (state)=>{
//             state.count -=  1
//         },

//     }
// })

// export const {increament,decreament} = counterSlice.actions
// export default counterSlice





import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count = state.count > 0 ? (state.count -= 1) : 0;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice;