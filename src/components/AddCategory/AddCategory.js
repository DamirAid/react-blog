import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { useState } from 'react/cjs/react.development';
import { blogContext } from '../../context/BlogContext';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import PersonAdd from '@mui/icons-material/PersonAdd';
import Grid from '@mui/material/Grid'

const Input = styled('input')({
	display: 'none',
});
const AddCategory = () => {
	const { addNewCategory } = useContext(blogContext)
	const [categoryTitle, setCategoryTitle] = useState('')
	const [categoryDescription, setCategoryDescription] = useState('')
	const [thumb, setThumb] = useState('')
	const handleImage = (e) => {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.onloadend = () => {
			setThumb(reader.result);
		}
		reader.readAsDataURL(file)
	}
	const handleClick = () => {
		const newArticle = {
			categoryTitle,
			categoryDescription,
			categoryThumbnail: thumb,
			artcileList: []
		}
		addNewCategory(newArticle)
		setCategoryTitle('')
		setCategoryDescription('')
		setThumb('')
	}


	return (
		<Grid container spacing={2}>
			<Grid item xs={6} md={3} style={{ position: 'relative' }}>
				<TextField
					id="demo-helper-text-misaligned-no-helper"
					label="Введите название категории"
					onChange={(e) => setCategoryTitle(e.target.value)}
					value={categoryTitle}
					fullWidth={true}
				/>

			</Grid>
			<Grid item xs={6} md={3} style={{ position: 'relative' }}>
				<TextField
					id="demo-helper-text-misaligned-no-helper"
					label="Введите описание категории"
					onChange={(e) => setCategoryDescription(e.target.value)}
					value={categoryDescription}
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
						onChange={(e) => handleImage(e)}
					/>
					<Button variant="contained" component="span" style={{ width: '100%', height: '100%', display: 'flex' }}>
						Upload Image
					</Button>
				</label>
			</Grid>
			<Grid item xs={6} md={3} style={{ position: 'relative' }}>
				<Button
					onClick={handleClick}
					variant="contained"
					className="btn_submit"
					color="success"
					endIcon={<PersonAdd />}
					size="large"
					fullWidth={true}
					style={{ height: '100%' }}
				>Добавить категорию</Button>

			</Grid>
		</Grid>
	);
};

export default AddCategory;