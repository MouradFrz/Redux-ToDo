import React, { useState } from "react";
import logo from "/todo-logo.png";
import { useSelector, useDispatch } from "react-redux";
import { addFolder, removeFolder } from "../store/todoSlice";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
function Sidebar({ sidebar, setSidebar, currentFolder, setCurrentFolder }) {
	const dispatch = useDispatch();
	const folders = useSelector((state) => state.todo);
	const [newFolder, setNewFolder] = useState("");
	return (
		<div
			className={`sm:w-[240px]  w-full z-50  bg-accent border-r-[1px] transition-all px-5 h-[100vh] fixed top-0 left-0 
		${!sidebar ? "sm:left-[-240px] left-[-100%]" : ""}
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
						<div key={index} className="relative group">
							<button
								onClick={() => {
									if (folder.id === currentFolder) {
										setCurrentFolder("");
									}
									dispatch(removeFolder(folder.id));
								}}
								className="absolute hover:bg-darker group-hover:block hidden px-2 py-1 top-[50%] translate-y-[-50%] right-4"
							>
								<BsFillTrashFill />
							</button>
							<button
								className={` ${
									currentFolder === folder.id ? "font-bold bg-darker" : ""
								} py-1 duration-75 mb-[1px] rounded-sm px-4 hover:bg-darker transition w-full text-left`}
								onClick={() => {
									setCurrentFolder(folder.id);
									if(document.querySelector("body").offsetWidth<640){
										setSidebar(false)
									}
								}}
							>
								{folder.name}
							</button>
						</div>
					);
				})}
				<div className="flex gap-3">
					<input
						type="text"
						className="border-green-100 px-3 outline-none border-[1px] w-[90%]"
						value={newFolder}
						onChange={(e) => {
							setNewFolder(e.target.value);
						}}
					/>
					<button
						className="w-[10%] text-3xl"
						onClick={() => {
							if (newFolder) {
								dispatch(addFolder(newFolder));
							}
							setNewFolder("");
						}}
					>
						+
					</button>
				</div>
			</div>
			<button
				onClick={() => {
					setSidebar((prev) => !prev);
				}}
				className={` ${
					sidebar ? "rotate-[180deg]" : ""
				} transition-all origin-left absolute top-0 left-[100%] bg-accent rounded-tr-xl rounded-br-xl border-r-[1px] border-t-[1px] border-b-[1px] p-2`}
			>
				<BsFillCaretRightFill />
			</button>
			<p className="text-xs text-center w-full absolute bottom-4 left-0 ">
				Designed and Developed by{" "}
				<a
					target="_blank"
					className="font-bold "
					href="https://www.linkedin.com/in/mourad-yaou/"
				>
					Yaou Mourad
				</a>
			</p>
		</div>
	);
}

export default Sidebar;
