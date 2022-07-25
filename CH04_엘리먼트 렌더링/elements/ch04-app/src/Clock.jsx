import React from "react"

function Clock(props) {
	let now =new Date().toLocaleDateString();
	let Time = new Date().toLocaleTimeString();
	return (
		<>
			<span>{now +" "+ Time}</span>
		</>
	)
}

export default Clock;