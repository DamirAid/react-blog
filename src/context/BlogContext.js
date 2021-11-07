import axios from 'axios';
import React, { createContext, useReducer } from 'react';

export const blogContext = createContext();

const INIT_STATE = {
	articles: [],
	article: {},
	articleIndex: null,
	editCategory: {},
	editArticleIndex: null,
	editArticle: {},
	editCategoryArticle: {}

}

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case "GET_NEW_CATEGORY":
			return { ...state, articles: action.payload }
		case "GET_NEW_ARTICLE":
			return { ...state, article: action.payload }
		case "GET_ARTICLE_INDEX":
			return { ...state, articleIndex: action.payload }
		case "GET_EDIT_CATEGORY":
			return { ...state, editCategory: action.payload }
		case "GET_EDIT_ARTICLE_INDEX":
			return { ...state, editArticleIndex: action.payload }
		case "GET_EDIT_ARTICLE":
			return { ...state, editArticle: action.payload }
		case "GET_EDIT_CATEGORY_ARTICLE":
			return { ...state, editCategoryArticle: action.payload }
		default:
			return state
	}

}

const BlogContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE);


	const getNewCategory = async () => {
		const { data } = await axios('http://localhost:8000/articles')
		dispatch({
			type: "GET_NEW_CATEGORY",
			payload: data
		})
	}

	const addNewCategory = async (category) => {
		await axios.post('http://localhost:8000/articles', category)
		getNewCategory()
	}
	const deleteCurArticle = async (id, deleteArticle) => {
		console.log(id, deleteArticle)
		await axios.patch(`http://localhost:8000/articles/${id}`, { artcileList: deleteArticle })
		getNewCategory()
	}
	const addNewArticle = async (newArticle, id) => {
		console.log(newArticle, id)
		let item = state.articles.find(item => item.id == id)
		item.artcileList.push(newArticle)
		await axios.patch(`http://localhost:8000/articles/${id}`, item)
		getNewCategory()
	}

	const getNewArticle = async (id) => {
		const { data } = await axios(`http://localhost:8000/articles/${id}`)
		dispatch({
			type: "GET_NEW_ARTICLE",
			payload: data
		})
	}

	const getArticleIndex = (index) => {
		dispatch({
			type: "GET_ARTICLE_INDEX",
			payload: index
		})
	}
	const editCurCategory = async (editCategory, id) => {
		console.log(editCategory, id)
		await axios.patch(`http://localhost:8000/articles/${id}`, editCategory)
		getNewCategory()

	}
	const getEditCategory = async (id) => {
		const { data } = await axios(`http://localhost:8000/articles/${id}`);
		dispatch({
			type: "GET_EDIT_CATEGORY",
			payload: data
		})
	}
	const getEditCategoryArticle = async (id) => {
		const { data } = await axios(`http://localhost:8000/articles/${id}`);
		dispatch({
			type: "GET_EDIT_CATEGORY_ARTICLE",
			payload: data
		})
	}
	const getEditArticleIndex = (index) => {
		dispatch({
			type: "GET_EDIT_ARTICLE_INDEX",
			payload: index
		})
	}
	const getEditArticle = async (id, index) => {
		console.log(id, index)
		const { data } = await axios(`http://localhost:8000/articles/${id}`)
		dispatch({
			type: "GET_EDIT_ARTICLE",
			payload: data.artcileList[index - 1]
		})
	}


	const editCurArticle = async (editArticle, id) => {
		console.log(editArticle, id)
		await axios.patch(`http://localhost:8000/articles/${id}`, { artcileList: editArticle })
		getNewCategory()
	}


	return (

		<blogContext.Provider value={{
			articles: state.articles,
			article: state.article,
			articleIndex: state.articleIndex,
			editCategory: state.editCategory,
			editArticleIndex: state.editArticleIndex,
			editArticle: state.editArticle,
			editCategoryArticle: state.editCategoryArticle,



			addNewCategory,
			getNewCategory,
			addNewArticle,
			getNewArticle,
			getArticleIndex,
			getEditCategory,
			editCurCategory,
			getEditArticleIndex,
			getEditArticle,
			editCurArticle,
			getEditCategoryArticle,
			deleteCurArticle

		}}>
			{children}

		</blogContext.Provider>

	)
}

export default BlogContextProvider;
