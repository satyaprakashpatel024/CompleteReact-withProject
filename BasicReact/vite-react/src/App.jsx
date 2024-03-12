import React from "react";
import Avatar from "./Avatar";
// import Counter from "./Counter";
// import ConditionalRendering from "./ConditionalRendering";
// first import default export then named export
// import DogCard from "./DogCard";

// props: passing properties to child from parent component

function App() {
	const obj= [{
		src:"https://images.unsplash.com/photo-1676073242862-ec549d06bc57?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		width:"500px",
		height:"400px"
	},{
		src:"https://images.unsplash.com/photo-1548546738-8509cb246ed3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHN8ZW58MHx8MHx8fDA%3D",
		width:"500px",
		height:"400px"
	},{
		src:"https://images.unsplash.com/photo-1497899236524-c79659901d7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1YnxlbnwwfHwwfHx8MA%3D%3D",
		width:"500px",
		height:"400px"
	}]
	return (
		<>
			{/* <Avatar {...obj[0]}/>
			<Avatar {...obj[1]}/>
			<Avatar {...obj[2]}>
				<div>Children component</div>
			</Avatar> */}
			{/* <ConditionalRendering/> */}
			{/* <Counter/> */}
			{/* <DogCard name="bruno" image="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
			<DogCard name="tiger" image="https://images.unsplash.com/photo-1676073242862-ec549d06bc57?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
		</>
	);
}

export default App;

/*
in importing jsx component first we have to import default component the named component:
in default export we can change the component during importung a component
but in named import we have to use the same name as the component
*/
