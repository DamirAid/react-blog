import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import SinglePage from './pages/SinglePage/SinglePage';
import AdminPage from './pages/AdminPage/AdminPage';
import AdminAddCategoryPage from './pages/AdminAddCategoryPage/AdminAddCategoryPage';
import AdminEditPage from './pages/AdminEditPage/AdminEditPage';
import AdminEditCategoryPage from './pages/AdminEditCategoryPage/AdminEditCategoryPage';
import AdminEditSinglePage from './pages/AdminEditSinglePage/AdminEditSinglePage';
import AdminAddArticlePage from './pages/AdminAddArticlePage/AdminAddArticlePage';

const Routes = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomePage} /> 
					<Route exact path="/category/articles:id" component={ArticlesPage} /> 
					<Route exact path="/category/articles:id/:index" component={SinglePage} /> 
					<Route exact path="/admin" component={AdminPage} /> 
					<Route exact path="/admin/addcat" component={AdminAddCategoryPage} /> 
					<Route exact path="/admin/addart" component={AdminAddArticlePage} /> 
					<Route exact path="/admin/editcat" component={AdminEditPage} /> 
					<Route exact path="/admin/editcat:id" component={AdminEditCategoryPage} /> 
					<Route exact path="/admin/editcat:id/:index" component={AdminEditSinglePage} /> 
				</Switch>
			</BrowserRouter>

		</div>
	);
};

export default Routes;