import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsExclamationLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setTaskDone, deleteTask, setTaskImportant } from "../store/todoSlice";
function Task({ task, groupId, currentFolder }) {
	const dispatch = useDispatch();
	return (
		<div
			className="bg-accent rounded-md mb-2 p-4 custom-border relative cursor-pointer"
			onClick={() => {
				dispatch(
					setTaskDone({ folderId: currentFolder, groupId, taskId: task.id })
				);
			}}
		>
			<button
				className="absolute top-2 right-2 z-20"
				onClick={(e) => {
					e.stopPropagation();
					dispatch(
						deleteTask({ folderId: currentFolder, groupId, taskId: task.id })
					);
				}}
			>
				<AiOutlineMinusCircle className="hover:text-red-400" />
			</button>
			<button
				className="absolute top-7 right-2 z-20"
				onClick={(e) => {
					e.stopPropagation();
					dispatch(
						setTaskImportant({
							folderId: currentFolder,
							groupId,
							taskId: task.id,
						})
					);
				}}
			>
				<BsExclamationLg className="hover:text-red-400" />
			</button>
			{task.done && (
				<div className="absolute top-0 left-0 w-full h-full bg-gray-300/70"></div>
			)}
			<span
				className={`block w-[4px] h-full  ${
					task.important ? "bg-red-500" : "bg-green-500"
				} absolute rounded-tl-md rounded-bl-md top-0 left-0`}
			></span>
			<h3 className="text-sm max-w-[90%]">{task.title}</h3>
		</div>
	);
}

export default Task;
