import React, {Component} from 'react';
import "./App.css";

export default class App extends Component {
	// state 만들기
	state = {
		// 배열 선언
		todoData :[
			{
				id:"1",
				title: "공부하기",
				completed: true
			},
			{
				id:"2",
				title: "청소하기",
				completed: true
			},
			{
				id:"3",
				title: "요리하기",
				completed: true
			}
		]
	}


	btnStyle ={
		color: "#fff",
		border: "none",
		padding: "5px 8px",
		borderRadius: "50%",
		cursor: "pointer",
    float: "right"
	}

	// 체크하면 선을 그어야 하기 때문에 동적으로 해야되서 함수로 만듬.
	getStyle = () =>{
		return {
			padding: "10px",
			borderBottom: "1px #ccc dotted",
			textDecoration: "none",
		}
	}

	handleClick = (id) =>{
		// filter 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환해줌.
		let newTodoList = this.state.todoData.filter(data => data.id !== id)
		console.log(newTodoList)
		this.setState({
      todoData: newTodoList
    });
	}
  render() {
    return (
	    <div className="container">
		    <div className="todoBlock">
			    <div className="title">
				    <h1>할 일 목록</h1>
			    </div>
			    {this.state.todoData.map((data) =>(
				    <div style={this.getStyle()} key={data.id}>
					    <p>
						    <input type="checkbox" defaultChecked={false} />
						    {"    "}{data.title}
						    <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
					    </p>
				    </div>
			    ))}
		    </div>
	    </div>
    )
  }
}