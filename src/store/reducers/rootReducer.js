import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistCommonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const appPersistConfig = {
  ...persistCommonConfig,
  key: "cart",
  whitelist: ["listCartItem"],
};

const rootReducer = () =>
  combineReducers({
    cart: persistReducer(appPersistConfig, cartReducer),
  });

export default rootReducer;
