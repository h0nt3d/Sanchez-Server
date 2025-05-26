import {useEffect} from "react";
import FileBrowser from "./FileBrowser";
import "./App.css";

function App() {
	useEffect(() => {
		document.body.style.backgroundColor = 'black';
		document.title = "Sanchez";
	}, []);
	return (
    		<div style={{ fontFamily: "sans-serif", padding: "20px", color: "white" }}>
      			<h1 style={{textAlign: "center"}}>♱ $ANCH3Z ♱</h1>
      			<FileBrowser />
    		</div>
  	);
}

export default App;

