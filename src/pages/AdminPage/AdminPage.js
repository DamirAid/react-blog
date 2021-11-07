import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
const AdminPage = () => {
	return (
		<section className="admin_page_sec">

			<Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
			<Link to="/admin/addcat">
        <MenuItem>
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Добавить новую категорию</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘К
          </Typography>
        </MenuItem>
				</Link>
				<Link to="/admin/addart">
        <MenuItem>
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Добавить новую статью</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
				</Link>
				<Link to="/admin/editcat">
        <MenuItem>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Изменить категории</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘К
          </Typography>
        </MenuItem>
				</Link>

      </MenuList>
    </Paper>

		</section>
	);
};

export default AdminPage;