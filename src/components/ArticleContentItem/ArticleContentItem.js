import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
const ArticleContentItem = ({ item }) => {
	return (
		<div className="article_item">
			<ImageListItem key={item.img} style={{ display: 'block' }}>
				<img
					src={item.articleThumb}
					srcSet={item.articleThumb}
					alt={item.articleTitle}
					loading="lazy"
				/>
				<ImageListItemBar
					title={item.articleTitle}
				/>
			</ImageListItem>
			<div className="article_editor" dangerouslySetInnerHTML={{ __html: item.articleContent }} />
		</div>

	);
};

export default ArticleContentItem;