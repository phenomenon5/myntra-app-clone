import { createSlice } from "@reduxjs/toolkit";

const bagSlice =createSlice({
    name:"bag",
    initialState:[],
    reducers:{
       add:(store,action) => {
          store.push(action.payload);
       } ,
       remove:(store,action) => {
         return (store.filter((itemId) => itemId !== action.payload))
       }
    }
})

export const bagActions =  bagSlice.actions;
export default bagSlice;