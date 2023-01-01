import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGroup } from "../store/todoSlice";
import Group from "./Group";

function TasksDisplay({ currentFolder }) {
	const dispatch = useDispatch();
	const [groupInput, setGroupInput] = useState("");
	const allFolders = useSelector((state) => state.todo);
	const myFolder = allFolders.filter(
		(folder) => folder.id === currentFolder
	)[0];
	return (
		<div className="py-20 px-10 dark:bg-darkcent flex gap-10 flex-wrap justify-center">
			{myFolder.groups.map((group, index) => {
				return <Group group={group} key={index} currentFolder={currentFolder} />;
			})}
			<div className="flex flex-col custom-border w-[400px] rounded-md h-fit p-4 dark:bg-darkerdark" >
				<input
					type="text"
					className="outline-none p-3 border-[1px] dark:bg-darkcent dark:border-darkcent "
					placeholder="New group name..."
					value={groupInput}
					onChange={(e) => {
						setGroupInput(e.target.value);
					}}
				/>
				<button
					className="w-fit bg-darker dark:bg-darkcent p-4 py-1 my-2"
					onClick={() => {
                        if(groupInput){
                            dispatch(addGroup({ id: currentFolder, name: groupInput }));
                        }
                        setGroupInput("")
					}}
				>
					Add
				</button>
			</div>
		</div>
	);
}

export default TasksDisplay;
