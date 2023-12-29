// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// // create action

// export const createUser = createAsyncThunk("createUser", async (data, {rejectWithValue}) =>{
// const response = await fetch("https://658ea1b12871a9866e7980e5.mockapi.io/crud", {
//     method: "POST" ,
//     heardes: {
//         "content-Type" : "application/json",
//     },
//     body : JSON.stringify(data),
// }
// );
// try{
// const result = await response.json();
//  return result;

// }catch(error){

// return rejectWithValue(error);
// }

// });

// export const UserDetails =  createSlice({
// name : "UserDetails",
// initialState : {
//     user : [],
//     loading : false,
//     error:null,

//     extraReducers : {
//         [createUser.pending] : (state) =>{
//             state.loading = true;
//         },
//         [createUser.fulfilled] : (state, action) =>{
//             state.loading = false;
//             state.user.push(action.payload)
//         },
//         [createUser.rejected] : (state, action) =>{
//             state.loading = false;
//             state.user = action.payload.message;
//         },
//     },
// });

// export default UserDetails.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action

export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
  const response = await fetch("https://658ea1b12871a9866e7980e5.mockapi.io/crud", {
    method: "POST",
    headers: {  // <-- Fix the typo here
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const UserDetails = createSlice({
  name: "UserDetails",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default UserDetails.reducer;