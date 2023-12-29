import { configureStore } from "@reduxjs/toolkit";
import UserDetails  from "./Action";


export const store = configureStore({
  reducer: {
 app : UserDetails,


  },
});