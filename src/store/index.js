import { createStore, combineReducers } from "redux";
import ListContacts from "../page/ListContacts";

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
      const newUser = {
        id: state.setLastUserId + 1,
        name: action.payload.name,
        username: action.payload.username,
        phone: action.payload.phone,
      };
      return {
        ...state,
        usersList: [...state.usersList, newUser],
        setLastUserId: state.setLastUserId + 1,
        setListUsers: state.usersList.some((item) => item.id === newUser.id),
      };

    case "REMOVE_USER":
      return {
        ...state,
    usersList: state.usersList.filter((u) => u.id !== action.payload.id)
      };
     
    case "EDIT_USER":
      return {
        ...state,
        usersList: state.usersList.map((user) => user.id === action.payload.id),
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
