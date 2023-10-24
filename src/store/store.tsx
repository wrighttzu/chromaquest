import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { settingsSlider } from './settingsReducer';
import { cupLevel } from './cupLevel';

const rootReducer = combineReducers({
    settings: settingsSlider.reducer,
    cuplevel: cupLevel.reducer,
});
  
export type RootState = ReturnType<typeof rootReducer>;
const store = configureStore({
    reducer: rootReducer,
})
  
export default store;