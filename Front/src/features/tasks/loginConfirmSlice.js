import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  peopleId:0,
  peopleEmail: "no email",
  loginId: 0,
  token: "no token",
  peopleName: "no name"
}

export const loginConfirmSlice = createSlice({
  name: 'loginConfirm',
  initialState,
  reducers: {
    setLoginDataStart: (state, action) => {
      let newState = action.payload
      state.peopleId = newState.peopleId
      state.peopleEmail = newState.peopleEmail
      state.loginId = newState.loginId
    },
    confirmLogin: (state, action) => {
      state.token = action.payload
    },
    setUserData: (state, action) => {
      console.log("se dispara evento setUserData con redux");
      //state.peopleName = action.payload
    }
  }
})

export const { setLoginDataStart, confirmLogin, setUserData } = loginConfirmSlice.actions

export default loginConfirmSlice.reducer