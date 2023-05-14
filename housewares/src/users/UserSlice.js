import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("login", async (user,thunkAPI) => {
    const res = await axios.post("http://localhost:4000/user",user);
    return res.data;
});

export const addNewUserToServer = createAsyncThunk("addNewUserToServer", async (user,thunkAPI) => {
    let res = await axios.post("http://localhost:4000/user/add", user);
    return res.data;
})

const initialState = {
    user:{name:"Guest", pass:" ", userStatus:"geust"},
    userStatus:"geust",
    direcPass:"111"
}
const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.user = null;
            state.userStatus="geust"
        },
        changeStatus:(state, action)=>{
            state.user.userStatus = "geust";
            state.user.name = "Guest";
            state.user.pass=" ";
        }
    }, 

    extraReducers: (builder) => {
        builder
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user.name=action.payload.name;    
            state.user.pass=action.payload.pass;    
             state.user.userStatus ="client"
        })
        .addCase(loginUser.pending, (state, action) => {
            state.status = "pending"
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.status = "error";
            state.user.userStatus= "trying";
        })
        .addCase(addNewUserToServer.fulfilled, (state, action) => {
            state.user.name = action.payload.name;
            state.userStatus= "client"
        })
        .addCase(addNewUserToServer.rejected, (state, action) => {
            state.user.name = action.payload.name;
        })
    }
})
export const { logout,changeStatus } = UserSlice.actions;
export default UserSlice.reducer;














