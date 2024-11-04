import {create} from "zustand"

export const useCounterStore = create((set)=>({
num1: 10,
num2:10,
// modifyallNum: (num1:number,num2:number)=> set({num1,num2})
  modifyAllNums: (num1: number, num2: number) => set({ num1, num2 }),

}))


