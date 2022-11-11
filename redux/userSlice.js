import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	actionsList: [],
	solvedActions: [],
	points: 0,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loadActions: (state, action) => {
			state.actionsList = action.payload;
		},
		solveAction: (state, action) => {
			state.actionsList = state.actionsList.filter((el) => el.id !== action.payload.id)
			state.solvedActions.push(action.payload.id)
			state.points = state.points += action.payload.point;
		},
	},
});

export const { loadActions, solveAction } = userSlice.actions;
export default userSlice.reducer;