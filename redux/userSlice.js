import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	initialActionsCount: 0,
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
			state.initialActionsCount = action.payload.length;
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