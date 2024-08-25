import React from 'react'
import './NoDataFound.css';
import { IoSearchSharp } from "react-icons/io5";

function NoDataFound() {
	return (
		<div className="noDataContainer">
			<div className='search-icon'>
				<IoSearchSharp />
			</div>
			
			<span>No data found. Please search proper query</span>
		</div>
	)
}

export default NoDataFound