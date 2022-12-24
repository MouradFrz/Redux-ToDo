import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import Task from "./Task";
function Group({ group }) {
	return (
		<div className="bg-darker w-[400px] py-4 px-3 custom-border relative">
			
			<h3 className="text-[1.6rem] mb-4 font-semibold rounded-md">
				<AiOutlineRight className="inline text-md" /> {group.name}
			</h3>
			<div className="">
				{group.tasks.map((task, index) => {
					return <Task task={task} />;
				})}
				{group.tasks.map((task, index) => {
					return <Task task={task} />;
				})}
				{group.tasks.map((task, index) => {
					return <Task task={task} />;
				})}
			</div>
		</div>
	);
}

export default Group;
