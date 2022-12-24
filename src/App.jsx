import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";
function App() {
	const [sidebar, setSidebar] = useState(true);
	const [currentFolder, setCurrentFolder] = useState("");
	return (
		<div className="flex  justify-end">
			<Sidebar
				sidebar={sidebar}
				setSidebar={setSidebar}
				currentFolder={currentFolder}
				setCurrentFolder={setCurrentFolder}
			/>
			<Main sidebar={sidebar} currentFolder={currentFolder}/>
		</div>
	);
}

export default App;
