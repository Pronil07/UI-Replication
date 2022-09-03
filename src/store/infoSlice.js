import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
    name: 'info',
    initialState: {
        heading: '',
        desc: ''
    },
    reducers: {
        changeStateValue: (state, inputArg) => {
            state.heading = inputArg.payload.heading;
            state.desc = inputArg.payload.desc;
        }
    }
});

export const {changeStateValue} = infoSlice.actions;
export default infoSlice.reducer;