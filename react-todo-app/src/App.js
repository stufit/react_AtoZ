import React, {Component} from 'react';
import "./App.css";

export default class App extends Component {
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

	// 배열 선언
	todoData = [
		{
			id:"1",
			title: "공부하기",
			completed: true
		},
		{
			id:"2",
			title: "청소하기",
			completed: true
		}
	]

  render() {
    return (
	    <div className="container">
		    <div className="todoBlock">
			    <div className="title">
				    <h1>할 일 목록</h1>
			    </div>
			    {this.todoData.map((data) =>(
				    <div style={this.getStyle()} key={data.id}>
					    <p>
						    <input type="checkbox" defaultChecked={false} />
						    {"    "}{data.title}
						    <button style={this.btnStyle}>x</button>
					    </p>
				    </div>
			    ))}
		    </div>
	    </div>
    )
  }
}