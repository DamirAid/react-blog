import React, { useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import { blogContext } from '../../context/BlogContext';

const SearchList = ({value}) => {
	const { getSearchCategories, searchArticles } = useContext(blogContext)

	useEffect(() => {
		getSearchCategories(value)
	},[value])
	console.log(value)
	return (
		<ul>
			{searchArticles.map(item => (
				<li>{item.categoryTitle}</li>
			))}
		</ul>
	);
};

export default SearchList;