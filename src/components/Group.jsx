import React, { useState } from "react";
import { BsViewList, BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeGroup, addTask } from "../store/todoSlice";
import Task from "./Task";
function Group({ group, currentFolder }) {
	const dispatch = useDispatch();
	const [taskName, setTaskName] = useState("");
	return (
		<div className="bg-darker dark:bg-darkerdark w-[400px] h-fit py-4 px-3 custom-border relative">
			<button
				onClick={() => {
					dispatch(removeGroup({ folderId: currentFolder, groupId: group.id }));
				}}
				className="absolute hover:bg-darker dark:hover:bg-darkcent group-hover:block px-2 py-1 top-[38px] translate-y-[-50%] right-4"
			>
				<BsFillTrashFill />
			</button>
			<h3 className="text-[1.6rem] mb-4 font-semibold rounded-md">
				<BsViewList className="inline text-md" /> {group.name}
			</h3>
			<div>
				<div className="flex justify-between custom-border w- mb-4 rounded-md h-fit p-4">
					<input
						type="text"
						className="outline-none w-full p-3 border-[1px] dark:bg-darkcent dark:border-darkcent"
						placeholder="Task name"
						value={taskName}
						onChange={(e) => {
							setTaskName(e.target.value);
						}}
					/>
					<button
						className="w-20 bg-darker dark:bg-darkcent dark:border-l-darkerdark dark:	border-l-2"
						onClick={() => {
							if (taskName) {
								dispatch(
									addTask({
										folderId: currentFolder,
										groupId: group.id,
										taskTitle: taskName,
									})
								);
							}
							setTaskName("");
						}}
					>
						Add
					</button>
				</div>
				{group.tasks.map((task) => {
					return <Task task={task} key={task.id} groupId={group.id} currentFolder={currentFolder} />;
				})}
			</div>
		</div>
	);
}

export default Group;
