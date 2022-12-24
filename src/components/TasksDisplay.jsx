import React from "react";
import { useSelector } from "react-redux";
import Group from "./Group";

function TasksDisplay({ currentFolder }) {
	const allFolders = useSelector((state) => state.todo);
	const myFolder = allFolders.filter((folder) => folder.name === currentFolder)[0];
	return <div className="py-20 px-10 min-h-[100vh] flex gap-20 flex-wrap justify-center">{
        myFolder.groups.map((group,index)=>{
            return <Group group={group} key={index}/>
        })
    }</div>;
}

export default TasksDisplay;
