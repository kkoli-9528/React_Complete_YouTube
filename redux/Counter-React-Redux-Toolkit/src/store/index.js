import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    substract: (state, action) => {
      state.counterVal -= Number(action.payload);
    }
  }
});

const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    toggle: (state) => {
      return state = !state;
    }
  }
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;

export default counterStore;


/*const INITIAL_VALUE = {
  counter: 0,
  privacy: false
};*/

/*const couterReducer = (store = INITIAL_VALUE, action) => {
  let newCounterValue = store;
  if (action.type === "INCREMENT") {
    newCounterValue = { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newCounterValue = { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newCounterValue = { ...store, counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBSTRACT") {
    newCounterValue = { ...store, counter: store.counter - Number(action.payload.num) };
  } else if (action.type === "PRIVACY_TOGGLE") {
    newCounterValue = { ...store, privacy: !store.privacy };
  }
  return newCounterValue;
};*/