import React from 'react';

const List = ({todoData, setTodoData}) => {
	const btnStyle ={
		color: "#fff",
		border: "none",
		padding: "5px 8px",
		borderRadius: "50%",
		cursor: "pointer",
		float: "right"
	}

	// 체크하면 선을 그어야 하기 때문에 동적으로 해야되서 함수로 만듬.
	const lifeStyle = (completed) => {
		return {
			padding: "10px",
			borderBottom: "1px #ccc dotted",
			textDecoration: completed ?  "line-through" : "none"
		}
	}

	const handleCompleChange = (id) => {
		let newTodoData = todoData.map((data) => {
			if (data.id === id) {
				data.completed = !data.completed;
			}
			return data
		})
		setTodoData(newTodoData);
	}

	const handleClick = (id) =>{
		// filter 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환해줌.
		let newTodoData = todoData.filter(data => data.id !== id)
		console.log(newTodoData)
		setTodoData(newTodoData)
	}

	return (
		<div>
			{todoData.map((data) =>(
				<div style={lifeStyle(data.completed)} key={data.id}>
						<input type="checkbox" defaultChecked={false} onChange={()=> handleCompleChange(data.id)} />
						{"    "}{data.title}
						<button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
				</div>
			))}
		</div>
	);
};

export default List;