import { createStore, combineReducers } from "redux";

const initialState = {
  usersList: [],
  setLastUserId: 0,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LIST":
      return {
        ...state,
        usersList: action.payload,
      };
    case "ADD_USER":
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };

    case "REMOVE_USER":
      console.log(state);
      let newusersList = state.usersList.filter((u) => u.id !== action.id);
      console.log(newusersList);
      return {
        ...state,
        usersList: state.usersList.filter((u) => u.id !== action.id),
      };

    case "EDIT_USER":
      const updatedUsers = [...state.usersList];
      const index = updatedUsers.findIndex((u) => u.id === action.payload.id);
      const updatedUser = { ...updatedUsers[index], ...action.payload };
      updatedUsers[index] = updatedUser;
      return {
        ...state,
        usersList: updatedUsers,
      };
    default:
      return state;
  }
};
//
// const newUser = action.payload;
// const existingUser =
// state.items.find(items => items.id === newUser.id);

// state.id += newUser.id;
// state.name += newUser.name;
// state.username += newUser.username;
// state.phone += newUser.phone;

// if(!existingUser) {
// state.items.push(newUser);
// } else {
// existingUser.id = newUser.id;
// }
//}
// },
// });

const store = createStore(userReducers);
//export const userActions = userSlice.actions;
export default store;
