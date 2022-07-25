import React from "react";

function Book(props) {
	let info ={
		color:'white',
		backgroundColor : 'crimson'
	};

	let img = {
		width:'150px',
		borderRadius:'100px'
	}



	return (
		<div style={info}>
			<div>
				<h2>{`이 책의 이름은 ${props.name} 입니다.`}</h2>
				<h3>{`이 책은 총 ${props.page} 페이지 입니다.`}</h3>
			</div>
		</div>
	);
};

export default Book;

