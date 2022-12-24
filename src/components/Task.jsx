import React from "react";

function Task({ task }) {
	return (
		<div className="bg-accent rounded-md mb-2 p-4 custom-border relative">
			<span className="block w-[4px] h-full bg-red-500 absolute rounded-tl-md rounded-bl-md top-0 left-0"></span>
			<h3 className="text-sm">{task.title}</h3>
		</div>
	);
}

export default Task;
