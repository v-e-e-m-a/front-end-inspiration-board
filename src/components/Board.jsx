const Board = () => {
	return (
		<li>
			<h2>BOARDS</h2>
			<input type ="text" id = "title" name = "title:" placeholder="Enter title" /> <br/>
			<input type= "text" value = "Owner's Name:" /> <br/>
			<input type = "text" value = "Preview:- " /> <br/>
			<button>Submit</button>
			</li>
	);

};
export default Board;