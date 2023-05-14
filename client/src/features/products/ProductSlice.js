import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk('fetchAllProducts' , async()=> {
    const response = await axios.get('http://localhost:4000/product/');
    return response.data;
  });
//לשרת
export const addProduct = createAsyncThunk("addProduct", async (product, thunkAPI) => {
  let res = await axios.post("http://localhost:4000/product/", product);
  return res.data;
});

export const deleteProduct = createAsyncThunk("deleteProduct", async (id, thunkAPI) => {
  let res = await axios.put("http://localhost:4000/product/delete/", id);
  return res.data;
});


  const initialState = {
  IsSucssesAdd:{name:" "},
  IsSucssesRemove:{name:" "},
  prodArr:[]
  }

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: { 
  },
    extraReducers: (builder) => {
      builder
      .addCase(fetchAllProducts.fulfilled,(state,action)=>{
        state.prodArr=action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
          state.IsSucssesAdd.name = action.payload.name;
      })
      .addCase(addProduct.rejected, (state, action) => {
          state.IsSucssesAdd = "error";
      })
       .addCase(addProduct.pending, (state, action) => {
          state.IsSucssesAdd = "pending";       
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
          state.IsSucssesRemove.name = action.payload.name;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
          state.IsSucssesRemove = "error";
      })
       .addCase(deleteProduct.pending, (state, action) => {
          state.IsSucssesRemove = "pending";     
      })
  }
})
export const {} = productSlice.actions;
export default productSlice.reducer;
