import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "todo",
  storage,
};

const rootReducer = combineReducers({
  todoReducer,
});

//
export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
