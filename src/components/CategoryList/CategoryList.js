import React, { useContext } from 'react';
import { blogContext } from '../../context/BlogContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useEffect } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';


const CategoryList = () => {
	const { articles, getNewCategory } = useContext(blogContext)

	useEffect(() => {
		getNewCategory()
	}, [])
	return (
		<Grid className="category__block" container sx={{ marginTop: '30px' }} spacing={2}>
			{
				articles.map(item => (
					<Grid item key={item.id} md={4} sx={{ pading: '0 15px' }}>
						<Card>
							<CardMedia
								component="img"
								height="140"
								image={item.categoryThumbnail}
								alt={item.categoryTitle}
							/>

							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{item.categoryTitle}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{item.categoryDescription}
								</Typography>
							</CardContent>
							<CardActions>
								<Link to={`/category/articles${item.id}`}>
									<Button size="small" endIcon={<ReadMoreIcon />}>Подробнее</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
				))
			}
		</Grid >
	);
};

export default CategoryList;