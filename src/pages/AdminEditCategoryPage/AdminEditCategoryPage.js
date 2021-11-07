import React from 'react';
import EditCategory from '../../components/EditCategory/EditCategory';

const AdminEditCategoryPage = (props) => {

	return (
		<section className="edit_category_sec">
			<EditCategory match={props.match.params.id}/>
			
		</section>
	);
};

export default AdminEditCategoryPage;