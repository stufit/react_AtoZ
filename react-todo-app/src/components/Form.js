import React from 'react';

const Form = ({handleSubmit,value,setValue}) => {

	const handleChange = (e) =>{
		console.log('e',e.target.value);
		setValue(e.target.value)
	}


	return (
		<div>
			<form style={{ display: 'flex'}} onSubmit={handleSubmit}>
				<input type={"text"} name={"value"} style={{ flex: "10", padding: "5px" }} placeholder={"해야 할 일을 입력하세요."} value={value} onChange={handleChange}/>
				<input type={"submit"} value={"입력"} style={{ flex: "1"}} className="btn" />
			</form>
		</div>
	);
};

export default Form;