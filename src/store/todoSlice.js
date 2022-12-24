import { createSlice, nanoid } from "@reduxjs/toolkit";
// const initialState = [
// 	{
// 		id: nanoid(),
// 		name: "Work",
// 		groups: [
// 			{
// 				id: nanoid(),
// 				name: "Uber",
// 				tasks: [
// 					{
// 						id: nanoid(),
// 						title: "Working on cardio",
// 					},
// 				],
// 			},
// 			{
// 				id: nanoid(),
// 				name: "Web dev",
// 				tasks: [
// 					{
// 						id: nanoid(),
// 						title: "Learning redux",
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: nanoid(),
// 		name: "Sports",
// 		groups: [
// 			{
// 				id: nanoid(),
// 				name: "Football",
// 				tasks: [],
// 			},
// 		],
// 	},
// ];
const initialState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addFolder: {
			reducer: (state, { payload }) => {
				state.push(payload);
				localStorage.setItem("todos", JSON.stringify(state));
			},
			prepare: (name) => {
				return {
					payload: {
						id: nanoid(),
						name,
						groups: [],
					},
				};
			},
		},
		removeFolder: {
			reducer: (state, { payload }) => {
				state.splice(state.map(el=>el.id).indexOf(payload),1);
				console.log()
				localStorage.setItem("todos", JSON.stringify(state));
			},
		},
	},
});
export default todoSlice.reducer;
export const { addFolder, removeFolder } = todoSlice.actions;
