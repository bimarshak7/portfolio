import React from 'react';


function Square ({value,onClick}){
	const stl=value?`square ${value}`:"square";
	return(
		<button className={stl} onClick={onClick}>{value}</button>
		)
}


export default Square;