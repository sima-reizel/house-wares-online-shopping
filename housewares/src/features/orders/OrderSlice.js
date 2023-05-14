import { createSlice } from "@reduxjs/toolkit";

const initialState={
basketArr:[],
showMiniBasket:"true",
}
const orderSlice=createSlice({
    name:"orders",
    initialState,
    reducers:{
     addOrder:(state,action)=>{
        let p={...action.payload}
        let ifFind=state.basketArr.find(x=>x.name==action.payload.name)
        if(ifFind==null)
        {
        let arr=[...state.basketArr,p]
        state.basketArr=arr
        }
        else{
         let index=state.basketArr.findIndex(item=>item.name===action.payload.name )          
         state.basketArr[index].qty++;
        }
     },
     removeOrder:(state,action)=>{
        let index=state.basketArr.findIndex(item=>item.name===action.payload.name )
        state.basketArr.splice(index,1)
     },
     editOrder:(state,action)=>{
      let index=state.basketArr.findIndex(item=>item.name===action.payload.name )
      if(action.payload.math=='+'){   
        state.basketArr[index].qty++;
      }
      else 
         state.basketArr[index].qty--;
      }     
     },
     editMiniBasketStatus:(state,action)=>{
      state.showMiniBasket=true;  
      state.showMiniBasket.setTimeout(()=>{state.showMiniBasket=false}, 7000) 
     }
})
export const{addOrder,removeOrder,editOrder,editMiniBasketStatus}=orderSlice.actions;
export default orderSlice.reducer;