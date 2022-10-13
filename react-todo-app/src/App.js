import React, {useState} from 'react';
import "./App.css";
import List from "./components/List";

export default function App() {
	// state 만들기
	const [todoData, setTodoData] = useState([]);
	const [value, setValue] = useState("");

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
	};




    return (
	    <div className="container">
		    <div className="todoBlock">
			    <div className="title">
				    <h1>할 일 목록</h1>
			    </div>
			    <List todoData={todoData} setTodoData={setTodoData}/>
			    <form style={{ display: 'flex'}} onSubmit={handleSubmit}>
				    <input type={"text"} name={"value"} style={{ flex: "10", padding: "5px" }} placeholder={"해야 할 일을 입력하세요."} value={value} onChange={handleChange}/>
				    <input type={"submit"} value={"입력"} style={{ flex: "1"}} className="btn" />
			    </form>
		    </div>
	    </div>
    )
}