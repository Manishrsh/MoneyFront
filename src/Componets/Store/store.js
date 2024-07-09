import { configureStore } from '@reduxjs/toolkit'
import ExpencefileSclice from './ExpencefileSclice'

export const store = configureStore({
  reducer: {
    
    roomId : ExpencefileSclice
  },
})