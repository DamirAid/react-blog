
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { blogContext } from '../../context/BlogContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
const ArticleList = ({ item, index, match }) => {
	const { getArticleIndex } = useContext(blogContext)
	const handleClick = (curIndex) => {
		getArticleIndex(curIndex)
	}
	return (

			<Grid item key={item.id} md={4} sx={{ pading: '0 15px' }}>
				<Card>
					<CardMedia
						component="img"
						height="140"
						image={item.articleThumb}
						alt={item.articleTitle}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{item.articleTitle}
						</Typography>
					</CardContent>
					<CardActions>
						<Link to={`/category/articles${match}/${index + 1}`} onClick={() => handleClick(index)}>
							<Button size="small" endIcon={<ReadMoreIcon />}>Подробнее</Button>
						</Link>
					</CardActions>
				</Card>
			</Grid>
	);

}
export default ArticleList;