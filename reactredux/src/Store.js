import {createStore} from "redux";

const accountDetails = {
  name: "",
  mobileNumber: 0,
  balance: 0,
};

function useReducers(state = accountDetails, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + +action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - +action.payload };
      case "updateName":
            return {...state,name:action.payload};
            case "updateNumber":
              return {...state,mobileNumber:action.payload};
    default:
        return state;
  }
}

const store = createStore(useReducers);

export default store;
