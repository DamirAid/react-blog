import React, { useContext, useEffect } from 'react';
import ArticleList from '../../components/ArticleList/ArticleList';
import { blogContext } from '../../context/BlogContext';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
const ArticlesPage = (props) => {
	const { getNewArticle, article } = useContext(blogContext)

	useEffect(() => {
		getNewArticle(props.match.params.id)
	}, [])
	console.log(article)


	return (
		<section class="articles_sec">
			<Typography variant="h2" gutterBottom component="div">
				Категории
			</Typography>
			<Grid className="articles__block" container sx={{ marginTop: '30px' }} spacing={2}>
				{article.categoryTitle ? (
					article.artcileList.map((item, index) => (
						<ArticleList item={item} index={index} match={props.match.params.id} />
					))
				) : (<CircularProgress />)
				}
			</Grid>
		</section>
	);
};

export default ArticlesPage;