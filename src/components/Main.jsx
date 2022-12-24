import React from "react";
import NoFolder from "./NoFolder";
import TasksDisplay from "./TasksDisplay";

function Main({ sidebar, currentFolder }) {
	return (
		<div
			className={`w-[calc(100%-240px)] bg-accent h-fit  transition-all min-h-[100vh] 
    ${!sidebar ? "w-[100%]" : ""}
    `}
		>
			{!currentFolder ? <NoFolder /> : <TasksDisplay currentFolder={currentFolder}/>}
		</div>
	);
}

export default Main;
