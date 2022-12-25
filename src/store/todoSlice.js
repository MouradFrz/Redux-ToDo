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
// 						done: false,
// 						important: false,
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
// 						done: true,
// 						important: true,
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
const initialState = localStorage.getItem("todos")
	? JSON.parse(localStorage.getItem("todos"))
	: [];
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
				state.splice(state.map((el) => el.id).indexOf(payload), 1);
				localStorage.setItem("todos", JSON.stringify(state));
			},
		},
		addGroup: {
			reducer: (state, { payload }) => {
				const indexOfCurrentFolder = state
					.map((el) => el.id)
					.indexOf(payload.id);
				state[indexOfCurrentFolder].groups.push({
					id: nanoid(),
					name: payload.name,
					tasks: [],
				});
				localStorage.setItem("todos", JSON.stringify(state));
			},
		},
		removeGroup: {
			reducer: (state, { payload }) => {
				const indexOfCurrentFolder = state
					.map((el) => el.id)
					.indexOf(payload.folderId);
				state[indexOfCurrentFolder].groups.splice(
					state[indexOfCurrentFolder].groups
						.map((el) => el.id)
						.indexOf(payload.groupId),
					1
				);
				localStorage.setItem("todos", JSON.stringify(state));
			},
		},
		addTask: {
			reducer: (state, { payload }) => {
				const indexOfCurrentFolder = state
					.map((el) => el.id)
					.indexOf(payload.folderId);
				const indexOfGroup = state[indexOfCurrentFolder].groups
					.map((el) => el.id)
					.indexOf(payload.groupId);
				state[indexOfCurrentFolder].groups[indexOfGroup].tasks.unshift(
					payload.task
				);
				localStorage.setItem("todos", JSON.stringify(state));
			},
			prepare: (data) => {
				return {
					payload: {
						folderId: data.folderId,
						groupId: data.groupId,
						task: {
							id: nanoid(),
							title: data.taskTitle,
							done: false,
							important: false,
						},
					},
				};
			},
		},
		setTaskDone: {
			reducer: (state, { payload }) => {
				const currentFolderIndex = state
					.map((el) => el.id)
					.indexOf(payload.folderId);
				const currentGroupIndex = state[currentFolderIndex].groups
					.map((el) => el.id)
					.indexOf(payload.groupId);
				const taskIndex = state[currentFolderIndex].groups[
					currentGroupIndex
				].tasks
					.map((el) => el.id)
					.indexOf(payload.taskId);
				state[currentFolderIndex].groups[currentGroupIndex].tasks[
					taskIndex
				].done =
					!state[currentFolderIndex].groups[currentGroupIndex].tasks[taskIndex]
						.done;
				localStorage.setItem("todos", JSON.stringify(state));
			},
		},
		deleteTask: {
			reducer: (state, { payload }) => {
				const currentFolderIndex = state
					.map((el) => el.id)
					.indexOf(payload.folderId);
				const currentGroupIndex = state[currentFolderIndex].groups
					.map((el) => el.id)
					.indexOf(payload.groupId);
				const taskIndex = state[currentFolderIndex].groups[
					currentGroupIndex
				].tasks
					.map((el) => el.id)
					.indexOf(payload.taskId);
				state[currentFolderIndex].groups[currentGroupIndex].tasks.splice(
					taskIndex,
					1
				);
				localStorage.setItem("todos", JSON.stringify(state));
			},
		},
		setTaskImportant: {
			reducer: (state, { payload }) => {
				const currentFolderIndex = state
					.map((el) => el.id)
					.indexOf(payload.folderId);
				const currentGroupIndex = state[currentFolderIndex].groups
					.map((el) => el.id)
					.indexOf(payload.groupId);
				const taskIndex = state[currentFolderIndex].groups[
					currentGroupIndex
				].tasks
					.map((el) => el.id)
					.indexOf(payload.taskId);
				state[currentFolderIndex].groups[currentGroupIndex].tasks[
					taskIndex
				].important =
					!state[currentFolderIndex].groups[currentGroupIndex].tasks[taskIndex]
						.important;
				localStorage.setItem("todos", JSON.stringify(state));
			},
		},
	},
});
export default todoSlice.reducer;
export const {
	addFolder,
	removeFolder,
	addGroup,
	removeGroup,
	addTask,
	setTaskDone,
	deleteTask,
	setTaskImportant
} = todoSlice.actions;
