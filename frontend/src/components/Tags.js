import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TagIcon from '@mui/icons-material/Tag';

export default function Tags() {


  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Теги  
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <TagIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
            <TagIcon/>
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
    </List>
  );
}