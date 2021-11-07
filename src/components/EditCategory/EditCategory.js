import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useState } from 'react/cjs/react.development';
import { blogContext } from '../../context/BlogContext';
import EditArticleList from '../EditArticleList/EditArticleList'
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import PersonAdd from '@mui/icons-material/PersonAdd';
import Grid from '@mui/material/Grid'

const Input = styled('input')({
	display: 'none',
});
const EditCategory = ({ match }) => {
	const { editCategory, getEditCategory, editCurCategory } = useContext(blogContext)

	const [editCategoryTitle, setEditCategoryTitle] = useState(editCategory.categoryTitle)
	const [editCategoryDescription, setEditCategoryDescription] = useState(editCategory.categoryDescription)
	const [editThumb, setEditThumb] = useState(editCategory.categoryThumbnail)


	useEffect(() => {
		getEditCategory(match)
	}, [])
	useEffect(() => {
		setEditCategoryTitle(editCategory.categoryTitle);
		setEditCategoryDescription(editCategory.categoryDescription);
		setEditThumb(editCategory.categoryThumbnail);
	}, [editCategory])
	const handleValueTitle = (e) => {
		setEditCategoryTitle(e.target.value)

	}
	const handleValueDescription = (e) => {
		setEditCategoryDescription(e.target.value)
	}
	const handleValueThumb = (e) => {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.onloadend = () => {
			setEditThumb(reader.result);
		}
		reader.readAsDataURL(file)
	}
	const handleClick = () => {
		const newEditCategory = {
			categoryTitle: editCategoryTitle,
			categoryDescription: editCategoryDescription,
			categoryThumbnail: editThumb
		}
		editCurCategory(newEditCategory, editCategory.id)
	}
	return (
		<>
			{editCategory.categoryTitle ? (


				<Grid container spacing={2}>
					<Grid item xs={6} md={3} style={{ position: 'relative' }}>
						<TextField
							id="demo-helper-text-misaligned-no-helper"
							label="Введите название категории"
							onChange={handleValueTitle}
							value={editCategoryTitle}
							fullWidth={true}
						/>
					</Grid>
					<Grid item xs={6} md={3} style={{ position: 'relative' }}>
						<TextField
							id="demo-helper-text-misaligned-no-helper"
							label="Введите название категории"
							onChange={handleValueDescription}
							value={editCategoryDescription}
							fullWidth={true}
							multiline
						/>
					</Grid>
					<Grid item xs={6} md={3} style={{ position: 'relative' }}>
						<label htmlFor="contained-button-file" style={{ width: '100%', height: '100%', display: 'flex' }}>
							<Input
								accept="image/*"
								id="contained-button-file"
								multiple
								type="file"
								onChange={(e) => handleValueThumb(e)}
							/>
							<Button variant="contained" component="span" style={{ width: '100%', height: '100%', display: 'flex' }}>
								Upload Image
							</Button>
						</label>

					</Grid>
					<Grid item xs={6} md={3}>
						<Button
							onClick={handleClick}
							variant="contained"
							className="btn_submit"
							color="success"
							endIcon={<PersonAdd />}
							size="large"
							fullWidth={true}
							style={{ height: '100%' }}
						>Изменить категорию</Button>
					</Grid>
				</Grid>

			) : (<CircularProgress />)}
			<EditArticleList match={match} />
		</>
	);
};

export default EditCategory;