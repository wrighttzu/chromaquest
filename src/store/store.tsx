import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { settingsSlider } from './settingsReducer';

const rootReducer = combineReducers({
    settings: settingsSlider.reducer
  });
  
  export type RootState = ReturnType<typeof rootReducer>;
  const store = configureStore({
    reducer: rootReducer,
  })
  
  export default store;