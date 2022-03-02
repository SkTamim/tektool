import React, { useState } from "react";

const SearchBox = (props) => {
	const [searchText, setSearchText] = useState("");

	const searchTextHandler = (event) => {
		setSearchText(event.target.value);
	};

	const searchFilterHandler = (event) => {
		props.onFilter(event.target.value);
	};

	const searchHandler = (event) => {
		event.preventDefault();
		props.search({
			searchText: event.target[0].value,
			searchFilter: event.target[1].value,
		});
		// console.log({
		// 	searchText: event.target[0].value,
		// 	searchFilter: event.target[1].value,
		// });
	};

	return (
		<form className='search-box' onSubmit={searchHandler}>
			<input
				type='search'
				name='search'
				id='search'
				className='search-box__input'
				placeholder='Search Here'
				autoComplete='off'
				onChange={searchTextHandler}
				value={searchText}
			/>

			<select
				id='filter'
				className='search-box__filter'
				onChange={searchFilterHandler}
			>
				<option value='all'>All</option>
				{props.options.map((element, index) => {
					return (
						<option value={element} key={index}>
							{element}
						</option>
					);
				})}
			</select>

			<button type='submit' className='search-box__search-button'>
				Search
			</button>
		</form>
	);
};

export default SearchBox;
