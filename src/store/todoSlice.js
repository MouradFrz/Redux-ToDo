import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState = [
	{
        id:nanoid(),
		name: "Work",
		groups: [
			{
                id:nanoid(),
				name: "Uber",
				tasks: [
					{
                        id:nanoid(),
						title: "Working on cardio",
					},
				],
			},
			{
                id:nanoid(),
				name: "Web dev",
				tasks: [
					{
                        id:nanoid(),
						title: "Learning redux",
					},
				],
			},
		],
	},
	{
        id:nanoid(),
		name: "Sports",
		groups: [
			{   
                id:nanoid(),
				name: "Football",
				tasks: [],
			},
		],
	},
];
const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {},
});
export default todoSlice.reducer