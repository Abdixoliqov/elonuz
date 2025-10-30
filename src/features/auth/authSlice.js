import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem } from '../../helpers/persistance-storage';

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
  authReady: false,
  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUserStart: state=>{
      state.isLoading = true
    },
    signUserSuccess: (state, action)=>{
      state.loggedIn = true
      state.isLoading = false
      state.user = action.payload
      const token = getItem('token')
      setItem('token', action.payload.access?action.payload.access:token)
    },
    signUserFailure: (state, action)=>{
      state.isLoading = false
      state.error = action.payload
    },
    handleAuthReady: state=>{
      state.authReady = true
    },
    
    logOut: state=>{
      state.loggedIn = false,
      state.authReady = false,
      state.user = null
    }

  },
});

export const { signUserFailure, signUserStart, signUserSuccess, handleAuthReady, logOut } = authSlice.actions;
export default authSlice.reducer;