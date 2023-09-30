import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { settingsSliderRed } from './settingsReducer';

const rootReducer = combineReducers({
    settings: settingsSliderRed.reducer
  });
  
  export type RootState = ReturnType<typeof rootReducer>;
  const store = configureStore({
    reducer: rootReducer,
  })
  
  export default store;