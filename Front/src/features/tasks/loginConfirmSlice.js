import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  peopleId:0,
  peopleEmail: "no email",
  loginId: 0,
  token:"no token"
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
    }
  }
})

export const { setLoginDataStart, confirmLogin } = loginConfirmSlice.actions

export default loginConfirmSlice.reducer