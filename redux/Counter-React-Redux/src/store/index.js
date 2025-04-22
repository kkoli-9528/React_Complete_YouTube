import { createStore } from 'redux';

const INITIAL_VALUE = {
  counter: 0,
  privacy: false
};

const couterReducer = (store = INITIAL_VALUE, action) => {
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
};

const counterStore = createStore(couterReducer);

export default counterStore;

