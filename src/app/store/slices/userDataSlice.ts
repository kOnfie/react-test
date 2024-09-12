import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateProps {
  userName: string;
}

const initialState: initialStateProps = {
  userName: 'John Doe',
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addUserName: (state: initialStateProps, action: PayloadAction<string>) => ({
      ...state,
      userName: action.payload,
    }),
  },
});

export const { addUserName } = userDataSlice.actions;
export default userDataSlice.reducer;
