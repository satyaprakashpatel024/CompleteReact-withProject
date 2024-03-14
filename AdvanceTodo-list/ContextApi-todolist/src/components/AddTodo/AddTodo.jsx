import React, { useState } from "react";

const AddTodo = ({updateList}) => {
    const [inputText,setInputText] = useState('')
	return (
		<div>
			<input 
                type="text" 
                value={inputText} 
                placeholder="Add Todo..." 
                onChange={(e)=>setInputText(e.target.value)}
            />
			<button onClick={()=>{
                updateList(inputText)
                setInputText('');
            }}>Add</button>
		</div>
	);
};

export default AddTodo;
