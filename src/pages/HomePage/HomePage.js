import React from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';
import Typography from '@mui/material/Typography';
const HomePage = () => {
	return (
		<section className="category_sec">
			<Typography variant="h2" gutterBottom component="div">
				Категории
			</Typography>
			<CategoryList />
		</section>
	);
};

export default HomePage;