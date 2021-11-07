import React, { useContext, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { blogContext } from '../../context/BlogContext';
import { useEffect, useState } from 'react/cjs/react.development';
import { Editor } from '@tinymce/tinymce-react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import PersonAdd from '@mui/icons-material/PersonAdd';
const Input = styled('input')({
	display: 'none',
});
const AddArticle = () => {
	const [article, setArticle] = useState({
		articleTitle: "",
		articleContent: "",
		articleThumb: ""
	})
	const { articles, getNewCategory, addNewArticle } = useContext(blogContext)
	const [val, setVal] = useState(1)
	useEffect(() => {
		getNewCategory()
	}, [articles])

	const editorRef = useRef(null);

	const handleTitleValue = (e) => {
		let newArticle = {
			...article,
			articleTitle: e.target.value,

		}
		setArticle(newArticle)
	}
	const handleThumbValue = (e) => {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.onloadend = () => {
			let newArticle = {
				...article,
				articleThumb: reader.result,
			}
			setArticle(newArticle)
		}
		reader.readAsDataURL(file)

	}
	const handleEditorValue = (e) => {
		let newArticle = {
			...article,
			articleContent: e.target.getContent()
		}

		setArticle(newArticle)
	}
	const handleClick = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
		addNewArticle(article, val)
		setArticle({
			articleTitle: "",
			articleContent: "",
			articleThumb: ""
		})
	}
	return (
		<Grid container spacing={2}>
			<Grid item xs={6} md={3} style={{ position: 'relative' }}>
				<FormControl component="fieldset">
					<FormLabel component="legend">Категории</FormLabel>
					<RadioGroup
						aria-label="gender"
						defaultValue={1}
						name="radio-buttons-group"
					>
						{
							articles.map(item => (
								<FormControlLabel onChange={(e) => setVal(e.target.value)} value={item.id} key={item.id} control={<Radio />} label={item.categoryTitle} />
							))
						}
					</RadioGroup>
				</FormControl>
			</Grid>
			<Grid item xs={6} md={9} style={{ position: 'relative' }}>
				<Grid container spacing={2}>
					<Grid item xs={6} md={6} style={{ position: 'relative' }}>
						<TextField
							id="demo-helper-text-misaligned-no-helper"
							label="Введите название статьи"
							onChange={handleTitleValue}
							value={article.articleTitle}
							fullWidth={true}
						/>
					</Grid>
					<Grid item xs={6} md={6} style={{ position: 'relative' }}>
						<label htmlFor="contained-button-file" style={{ width: '100%', height: '100%', display: 'flex' }}>
							<Input
								accept="image/*"
								id="contained-button-file"
								multiple
								type="file"
								onChange={(e) => handleThumbValue(e)}
							/>
							<Button variant="contained" component="span" style={{ width: '100%', height: '100%', display: 'flex' }}>
								Upload Image
							</Button>
						</label>
					</Grid>
					<Grid item xs={12} md={12} style={{ position: 'relative' }}>
						<Editor
							apiKey="ruys8ndx5xlixz9mj9vqtmioh3nkqfyo0h390wscp6pg5cc3"
							onChange={handleEditorValue}
							onInit={(evt, editor) => editorRef.current = editor}
							init={{
								height: 500,
								menubar: false,
								plugins: [
									'advlist autolink lists link image charmap print preview anchor',
									'searchreplace visualblocks code fullscreen',
									'insertdatetime media table paste code help wordcount'
								],
								toolbar: 'undo redo | formatselect | ' +
									'bold italic backcolor | alignleft aligncenter ' +
									'alignright alignjustify | bullist numlist outdent indent | ' +
									'removeformat | help',
								content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
							}}
						/>
					</Grid>
					<Grid item xs={12} md={12}>
						<Button
							onClick={handleClick}
							variant="contained"
							className="btn_submit"
							color="success"
							endIcon={<PersonAdd />}
							size="large"
							fullWidth={true}
							style={{ height: '100%' }}
						>Добавить статью</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>

	);
};

export default AddArticle;