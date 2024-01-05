import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk("createUser",
 async (data, { rejectWithValue }) => {
  const response = await fetch("https://658ea1b12871a9866e7980e5.mockapi.io/crud", {
    method: "POST",
    headers: {  
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

// create action Read
export const  showUser = createAsyncThunk("showUser", async (args, {rejectWithValue}) =>{

  const response = await fetch("https://658ea1b12871a9866e7980e5.mockapi.io/crud");

  try{
    const result = await response.json();
    return result;
  }catch(error){
    return rejectWithValue(error);

  }
});

// create action delet
export const  deleteUser = createAsyncThunk("deleteUser", async (id, {rejectWithValue}) =>{

  const response = await fetch(`https://658ea1b12871a9866e7980e5.mockapi.io/crud/${id}`,
  {method: "DELETE"}
  );
  
  try{
    const result = await response.json();
    return result;
  }catch(error){
    return rejectWithValue(error);

  }
});
// create action update
export const updateUser = createAsyncThunk("updateUser",
 async (data, { rejectWithValue }) => {
  const response = await fetch(`https://658ea1b12871a9866e7980e5.mockapi.io/crud/${data.id}`, {
    method: "PUT",
    headers: {  
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
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = (action.payload);
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const {id} = action.payload;
        if(id){
          state.user = state.user.filter((ele) => ele.id !== id)
          
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
       state.user = state.user.map((ele) =>(
        ele.id === action.payload.id ? action.payload : ele
       ))
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
  },
});

export default UserDetails.reducer;