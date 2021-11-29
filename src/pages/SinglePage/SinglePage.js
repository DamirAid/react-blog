import React, { useContext, useEffect } from 'react';
import ArticleContentItem from '../../components/ArticleContentItem/ArticleContentItem';
import { blogContext } from '../../context/BlogContext';
import CircularProgress from '@mui/material/CircularProgress';
const SinglePage = (props) => {


	console.log(props.match.params.index)
	const { getNewArticle, article } = useContext(blogContext)

	useEffect(() => {
		getNewArticle(props.match.params.id)
	}, [])

	
	return (
		<section className="single_sec">
			{article.categoryTitle ? (
				article.artcileList.map((item, index) => {
					if (index === props.match.params.index - 1) {
						return (
							<ArticleContentItem key={index} item={item}/>
						)
					}
				})
			) : (<CircularProgress />)
			}
		</section>
	);
};

export default SinglePage;