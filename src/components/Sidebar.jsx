import React from "react";
import logo from "../../public/todo-logo.png";
import { useSelector } from "react-redux";
import { BsFillCaretRightFill } from "react-icons/bs";
function Sidebar({ sidebar, setSidebar, currentFolder, setCurrentFolder }) {
	const folders = useSelector((state) => state.todo);
	return (
		<div
			className={`w-[240px] bg-accent border-r-[1px] transition-all px-5 h-[100vh] fixed top-0 left-0 
		${!sidebar ? "left-[-240px]" : ""}
		`}
		>
			<div className="flex justify-center gap-2 p-6 items-center">
				<img src={logo} className="w-12" alt="logo" />
				<h1 className="font-bold text-3xl">DoIt</h1>
			</div>
			<h2 className="text-xs mb-2">My Folders</h2>
			<div>
				{folders.map((folder, index) => {
					return (
						<button
							key={index}
							className={` ${
								currentFolder === folder.name ? "font-bold bg-darker" : ""
							} py-1 duration-75 mb-[1px] rounded-sm px-4 hover:bg-darker transition w-full text-left`}
							onClick={() => {
								setCurrentFolder(folder.name);
							}}
						>
							{folder.name}
						</button>
					);
				})}
			</div>
			<button
				onClick={() => {
					setSidebar((prev) => !prev);
				}}
				className="absolute top-0 left-[100%] bg-accent rounded-tr-xl rounded-br-xl border-r-[1px] border-t-[1px] border-b-[1px] p-2"
			>
				<BsFillCaretRightFill />
			</button>
		</div>
	);
}

export default Sidebar;
