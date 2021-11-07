import React, { useContext, useEffect } from 'react';
import { blogContext } from '../../context/BlogContext';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

import Grid from '@mui/material/Grid';

import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
const EditArticleList = ({ match }) => {
	const { editCategory, getEditArticleIndex, deleteCurArticle, getEditCategory, articles } = useContext(blogContext)
	useEffect(() => {
		getEditCategory(match)
	
	}, [articles])
	const handleClick = (curIndex) => {
		getEditArticleIndex(curIndex)
	}
	const handleDeleteClick = (curIndex) => {
		const newDeleteArr = editCategory.artcileList.filter((_, index) => index !== curIndex)
		deleteCurArticle(match, newDeleteArr)
	}


	return (
		<section className="edit_article_sec">
			{editCategory.categoryTitle ? (
				editCategory.artcileList.map((item, index) => (
					<Grid item xs={12} md={12} key={index}>

						<ListItem
							sx={{ backgroundColor: '#ff4400' }}
							secondaryAction={
								<IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(index)}>
									<DeleteIcon />
								</IconButton>

							}
						>
							<Link
								to={`/admin/editcat${match}/${index + 1}`}
								onClick={() => handleClick(index)}
							>
								<ListItemAvatar>
									<Edit />
								</ListItemAvatar>
								<ListItemText
									primary={item.articleTitle}
								/>
							</Link>
						</ListItem>
					</Grid>

				))
			) : (<CircularProgress />)}
		</section>
	);
};

export default EditArticleList;