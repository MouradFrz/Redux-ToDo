import React from "react";
import NoFolder from "./NoFolder";
import TasksDisplay from "./TasksDisplay";
import { CgDarkMode } from "react-icons/cg";
function Main({ sidebar, currentFolder }) {
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.add('dark')
	  } else {
		document.documentElement.classList.remove('dark')
	  }
	const toggleMode = () => {
		document.documentElement.classList.toggle("dark");
		if(document.documentElement.classList.contains("dark")){
			localStorage.theme = "dark"
		}else{
			localStorage.theme = "light"
		}
	};
	return (
		<div
			className={` bg-accent h-fit w-full dark:bg-darkcent dark:text-darker  transition-all min-h-[100vh] 
    ${!sidebar ? "w-[100%]" : "sm:w-[calc(100%-240px)]"}
    `}
		>
			<div className="py-3 flex justify-end transition-all dark:bg-darkcent">
				<button
					onClick={toggleMode}
					className="p-2  border-[2px] b rounded-md  mr-4"
				>
					<CgDarkMode className="dark:text-accent" />
				</button>
			</div>
			{!currentFolder ? (
				<NoFolder />
			) : (
				<TasksDisplay currentFolder={currentFolder} />
			)}
		</div>
	);
}

export default Main;
