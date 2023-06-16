import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./store/reducers/rootReducer.js";

const reduxStore = createStore(rootReducer());

export const dispatch = reduxStore.dispatch;
export const persistor = persistStore(reduxStore);

export default reduxStore;
