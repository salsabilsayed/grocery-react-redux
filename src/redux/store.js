import { createStore } from "redux";
import groceryReducer from "./Reducer";
import { loadState,saveState } from "./localstorage";

const persistedState = loadState();

const store = createStore(groceryReducer,persistedState);

store.subscribe(()=>{
    saveState({
        items: store.getState().items
    })
  })

export default store;