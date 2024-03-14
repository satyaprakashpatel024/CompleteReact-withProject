import React, { useState } from "react";

const AddTodo = ({updateList}) => {
    const [inputText,setInputText] = useState('')
	return (
		<div>
			<input 
                value={inputText} 
                type="text" 
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
