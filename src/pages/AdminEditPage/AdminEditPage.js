import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogContext } from '../../context/BlogContext';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import FolderIcon from '@mui/icons-material/Folder';

const AdminEditPage = () => {
	const { articles, getNewCategory } = useContext(blogContext)
	useEffect(() => {
		getNewCategory()

	}, [])
	const Demo = styled('div')(({ theme }) => ({
		backgroundColor: theme.palette.background.paper,
	}));
	return (
		<section className="admin_edit_sec">
			{articles.map(item => (
				<Link to={`editcat${item.id}`} key={item.id}>
					<Demo>
						<List>

							<ListItem>
								<ListItemIcon>
									<FolderIcon />
								</ListItemIcon>
								<ListItemText
									primary={item.categoryTitle}
								/>
							</ListItem>,

						</List>
					</Demo>
				</Link>
			))}

		</section>
	);
};

export default AdminEditPage;









// import React, { useContext, useRef } from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { blogContext } from '../../context/BlogContext';
// import { useEffect, useState } from 'react/cjs/react.development';
// import { Editor } from '@tinymce/tinymce-react';

// const AdminEditSinglePage = (props) => {

// 	const { allArticles,articleEditIndex, getAllArticles } = useContext(blogContext)
// 	const [val, setVal] = useState('')
// 	const [editArticle, setEditArticle] = useState(allArticles[articleEditIndex])
// 	console.log(allArticles)
// 	const editorRef = useRef(null);
// 	useEffect(() => {
// 		getAllArticles()
// 	}, [])	
// 	return (
// 		<></>
// 		// <div>
// 		// 	<FormControl component="fieldset">
// 		// 		<FormLabel component="legend">Gender</FormLabel>
// 		// 		<RadioGroup
// 		// 			aria-label="gender"
// 		// 			defaultValue="female"
// 		// 			name="radio-buttons-group"
// 		// 		>
// 		// 			{
// 		// 				allArticles.map(item => (
// 		// 					<FormControlLabel onChange={(e) => setVal(e.target.value)} value={item.id} key={item.id} control={<Radio />} label={item.categoryTitle} />
// 		// 				))
// 		// 			}
// 		// 		</RadioGroup>
// 		// 	</FormControl>
// 		// 	<div className="add_article_block">
// 		// 		<input
// 		// 			type="text"

// 		// 			placeholder="Введите название статьи" />
// 		// 		<input
// 		// 			accept="image/*"
// 		// 			multiple
// 		// 			type="file"
// 		// 		// onChange={(e) => handleThumbValue(e)}
// 		// 		/>
// 		// 		<Editor
// 		// 			apiKey="ruys8ndx5xlixz9mj9vqtmioh3nkqfyo0h390wscp6pg5cc3"
// 		// 			// onChange={handleEditorValue}
// 		// 			onInit={(evt, editor) => editorRef.current = editor}
// 		// 			// initialValue={article.articleContent}
// 		// 			init={{
// 		// 				height: 500,
// 		// 				menubar: false,
// 		// 				plugins: [
// 		// 					'advlist autolink lists link image charmap print preview anchor',
// 		// 					'searchreplace visualblocks code fullscreen',
// 		// 					'insertdatetime media table paste code help wordcount'
// 		// 				],
// 		// 				toolbar: 'undo redo | formatselect | ' +
// 		// 					'bold italic backcolor | alignleft aligncenter ' +
// 		// 					'alignright alignjustify | bullist numlist outdent indent | ' +
// 		// 					'removeformat | help',
// 		// 				content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
// 		// 			}}
// 		// 		/>
// 		// 		<button>Log editor content</button>
// 		// 	</div>
// 		// </div>
// 	);
// };

// export default AdminEditSinglePage;