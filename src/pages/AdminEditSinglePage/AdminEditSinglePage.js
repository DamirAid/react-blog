import React, { useContext, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { blogContext } from '../../context/BlogContext';
import Grid from '@mui/material/Grid'
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react/cjs/react.development';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import PersonAdd from '@mui/icons-material/PersonAdd';

const Input = styled('input')({
	display: 'none',
});
const AdminEditSinglePage = (props) => {
	const { getEditArticle, editArticle, editCurArticle, getEditCategoryArticle, editCategoryArticle } = useContext(blogContext)

	const [articleTitle, setArticleTitle] = useState(editArticle.articleTitle)
	const [articleThumb, setArticleThumb] = useState(editArticle.articleThumb)
	const [articleContent, setArticleContent] = useState(editArticle.articleContent)

	useEffect(() => {
		getEditArticle(props.match.params.id, props.match.params.index)
		getEditCategoryArticle(props.match.params.id)

	}, [])

	useEffect(() => {
		setArticleTitle(editArticle.articleTitle)
		// setArticleThumb(editArticle.articleThumb)
		setArticleContent(editArticle.articleContent)
	}, [editArticle])
	const editorRef = useRef(null);
	const handleValueThumb = (e) => {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.onloadend = () => {
			setArticleThumb(reader.result);
		}
		reader.readAsDataURL(file)
	}
	const handleClick = () => {

		const newEditArr = [
			...editCategoryArticle.artcileList

		]
		const newEditArticle = {
			articleTitle,
			articleThumb,
			articleContent
		}
		newEditArr.splice(props.match.params.index - 1, 1, newEditArticle)
		console.log(newEditArr)


		editCurArticle(newEditArr, props.match.params.id)
	}

	return (
		<section className="edit_single_sec">
			<Grid container spacing={2}>

				{/* <FormControl component="fieldset">
				<FormLabel component="legend">Gender</FormLabel>
				<RadioGroup
					aria-label="gender"
					defaultValue="female"
					name="radio-buttons-group"
				>
					{
						editArticle.map(item => (
							<FormControlLabel value={item.id} key={item.id} control={<Radio />} label={item.categoryTitle} />
						))
					}
				</RadioGroup>
			</FormControl>  */}
				<Grid item xs={6} md={6} style={{ position: 'relative' }}>
					<TextField
						id="demo-helper-text-misaligned-no-helper"

						onChange={(e) => setArticleTitle(e.target.value)}
						value={articleTitle}
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
							onChange={(e) => handleValueThumb(e)}
						/>
						<Button variant="contained" component="span" style={{ width: '100%', height: '100%', display: 'flex' }}>
							Upload Image
						</Button>
					</label>
				</Grid>
				<Grid item xs={12} md={12} style={{ position: 'relative' }}>
					<Editor
						apiKey="ruys8ndx5xlixz9mj9vqtmioh3nkqfyo0h390wscp6pg5cc3"
						onChange={(e) => setArticleContent(e.target.getContent())}
						onInit={(evt, editor) => editorRef.current = editor}
						initialValue={editArticle.articleContent}
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
				<Grid item xs={12} md={12} style={{ position: 'relative' }}>
					<Button
						onClick={handleClick}
						variant="contained"
						className="btn_submit"
						color="success"
						endIcon={<PersonAdd />}
						size="large"
						fullWidth={true}
						style={{ height: '100%' }}
					>Изменить статью</Button>
				</Grid>
			</Grid >
		</section>
	);
};

export default AdminEditSinglePage;