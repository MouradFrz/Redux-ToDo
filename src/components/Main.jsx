import React from "react";
import NoFolder from "./NoFolder";
import TasksDisplay from "./TasksDisplay";

function Main({ sidebar, currentFolder }) {
	return (
		<div
			className={` bg-accent h-fit w-full  transition-all min-h-[100vh] 
    ${!sidebar ? "w-[100%]" : "sm:w-[calc(100%-240px)]"}
    `}
		>
			{!currentFolder ? <NoFolder /> : <TasksDisplay currentFolder={currentFolder}/>}
		</div>
	);
}

export default Main;
