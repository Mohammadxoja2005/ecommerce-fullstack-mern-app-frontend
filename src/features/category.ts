import { createSlice } from "@reduxjs/toolkit";

const initialStateValue: Array<any> = [];

export const categorySlice = createSlice({
    name: "category",
    initialState: { value: initialStateValue },

    reducers: {
        post: (state, action) => {
            return (state = {
                value: action.payload
            });
        }
    }
})

export default categorySlice.reducer;
export const { post } = categorySlice.actions; 