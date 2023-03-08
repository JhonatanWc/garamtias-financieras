import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dashboardRoute: "home"
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setRoute: (state, action) => {
      console.log("se intenta cambiar ruta");
    }
  }
})

export const { setRoute } = appStateSlice.actions

export default appStateSlice.reducer