import React from "react";
import { BsViewList, BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeGroup } from "../store/todoSlice";
import Task from "./Task";
function Group({ group, currentFolder }) {
	const dispatch = useDispatch();
	return (
		<div className="bg-darker w-[400px] h-fit py-4 px-3 custom-border relative">
			<button
				onClick={() => {
					dispatch(removeGroup({ folderId: currentFolder, groupId: group.id }));
				}}
				className="absolute hover:bg-darker group-hover:block px-2 py-1 top-[38px] translate-y-[-50%] right-4"
			>
				<BsFillTrashFill />
			</button>
			<h3 className="text-[1.6rem] mb-4 font-semibold rounded-md">
				<BsViewList className="inline text-md" /> {group.name}
			</h3>
			<div className="">
				{group.tasks.map((task, index) => {
					return <Task task={task} />;
				})}
			</div>
		</div>
	);
}

export default Group;
