import React, {useState} from 'react';
import "./App.css";

export default function App() {
	// state 만들기
	const [todoData, setTodoData] = useState([]);
	const [value, setValue] = useState("");

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

	const handleClick = (id) =>{
		// filter 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환해줌.
		let newTodoData = todoData.filter(data => data.id !== id)
		console.log(newTodoData)
		setTodoData(newTodoData)
	}

	const handleChange = (e) =>{
		console.log('e',e.target.value);
		setValue(e.target.value)
	}

	const handleSubmit = (e) =>{
		// form 안에 input을 전송할 때 페이지가 리로드 되는 것을 막아준다.
		e.preventDefault();

		// 새로운 데이터
		let newTodo = {
			id: Date.now(),
			title: value,
			completed: false,
		};

		// 원래 있던 할 일에 새로운 할 일 더해주기
		setTodoData((prev) => [...prev,newTodo]);
		setValue("")
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

    return (
	    <div className="container">
		    <div className="todoBlock">
			    <div className="title">
				    <h1>할 일 목록</h1>
			    </div>
			    {todoData.map((data) =>(
				    <div style={lifeStyle(data.completed)} key={data.id}>
					    <p>
						    <input type="checkbox" defaultChecked={false} onChange={()=> handleCompleChange(data.id)} />
						    {"    "}{data.title}
						    <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
					    </p>
				    </div>
			    ))}
			    <form style={{ display: 'flex'}} onSubmit={handleSubmit}>
				    <input type={"text"} name={"value"} style={{ flex: "10", padding: "5px" }} placeholder={"해야 할 일을 입력하세요."} value={value} onChange={handleChange}/>
				    <input type={"submit"} value={"입력"} style={{ flex: "1"}} className="btn" />
			    </form>
		    </div>
	    </div>
    )
}