import { configureStore, createSlice } from "@reduxjs/toolkit";

// const initialState = {
// usersList: [],
// };

const userReducers = createSlice({
  name: "usersList",
  initialState: {
    usersList: [],
  },
  reducers: {
    SET_USER_LIST(state, action) {
      const setUserList = (state.usersList = action.payload);
    },
    ADD_USER(state, action) {
      const addUser = (state.usersList = [...state.usersList, action.payload]);
      console.log(addUser);
    },
    REMOVE_USER(state, action) {
      //const { id } = action.payload;
      //const remUs = state.usersList.find((u) => u.id !== id);
      state.usersList = state.usersList.filter((u) => u.id !== action.payload);
      
    },
    EDIT_USER(state, action) {
      const updatedUsers = [...state.usersList];
      const index = updatedUsers.findIndex((u) => u.id === action.payload.id);
      const updatedUser = { ...updatedUsers[index], ...action.payload};
      updatedUsers[index] = updatedUser;
      state.usersList = updatedUsers;
      console.log(updatedUsers)
    },
  },
});

const store = configureStore({
  reducer: { usersList: userReducers.reducer },
});
export const userActions = userReducers.actions;
export default store;
