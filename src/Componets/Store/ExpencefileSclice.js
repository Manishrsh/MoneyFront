import { createSlice } from '@reduxjs/toolkit';

const expenceFile = createSlice({
  name: 'auth',
  initialState: {
    roomId: '',
  },
  reducers: {
    setEcpencedate(state, action) {
      state.roomId = action.payload;
    },
  },
});

export const { setEcpencedate } = expenceFile.actions;
export default expenceFile.reducer;
