import {useState, useEffect} from "react";
import "./FileBrowser.css";

function FileBrowser({path = "/"}) {
	const [files, setFiles] = useState([]);
	const [currentPath, setCurrentPath] = useState(path);
	const [fileContent, setFileContent] = useState("");
	const BACKENDADDRESS = "<device_address>:3001";
	useEffect(() => {
		fetch(`http://${BACKENDADDRESS}${currentPath}`)
		.then(res => { 
			if (res.headers.get("content-type")?.includes("application/json")) {
				return res.json().then(setFiles);
			}
			else {
				return res.text().then(setFileContent);
			}
		});
	}, [currentPath]);

	const handleClick = (name) => {
		const newPath = currentPath.endsWith("/") 
		? currentPath + name 
		: currentPath + "/" + name;
		setCurrentPath(newPath);
		setFileContent("");
	};

	const goUp = () => {
		const parts = currentPath.split("/").filter(Boolean);
		parts.pop();
		setCurrentPath("/" + parts.join("/"));
		setFileContent("");
	};
	

	return (
		<div className="file-Browser">
			{currentPath !== "/" && <button onClick={goUp}> Go Up </button>}
			{fileContent ? (
				<pre style={{whiteSpace: "pre-wrap"}}>{fileContent}</pre>
			) : (
				<ul>
					{files.map((file, idx) =>(
						<li key={idx} onClick={() => handleClick(file)} style={{cursor: "pointer"}}>
							♱ {file}
							<a href={`http://${BACKENDADDRESS}${currentPath.endsWith("/") ? currentPath : currentPath + "/"}` + file}
							download
							style={{marginLeft: '1em'}}
							onClick={(e) => e.stopPropagation()}>
							download</a>
						</li>	
					))}
				</ul>
			)}
		</div>
	);
}

export default FileBrowser;
