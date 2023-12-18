

import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState:{
    "CORREO":null,
    "ROL":null,
    "ID":null
},
  reducers: {
    //reducer son los metodos que modifican el estado
    addUser: (state, action) => {
      //el state es el estado que se va a modificar, y action es los props
      const { CORREO,ROL,ID } = action.payload; //cuando son varios datos que se van a enviar se hace el destructuring object
      state.CORREO = CORREO;
      state.ROL = ROL;
      state.ID=ID;
      
    }
  },
});

//se exportan los reducerss
export const { addUser} = userSlice.actions;

export default userSlice.reducer;