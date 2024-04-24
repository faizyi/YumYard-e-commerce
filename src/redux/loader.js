import {createSlice} from '@reduxjs/toolkit';
const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
      isLoading: false,
    },
    reducers: {
      showLoader: (state) => {
        state.isLoading = true;
      },
      hideLoader: (state) => {
        state.isLoading = false;
      },
    },
  });
export default loaderSlice.reducer
export const {showLoader,hideLoader} = loaderSlice.actions