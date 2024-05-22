import { Building } from '../../shared-types/rooms.ts';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import { openBuilding, removeBuilding } from '../../redux/room-manager/room-manager-slice.ts';

interface BuildingProps {
  building: Building;
}

export function BuildingListItem({ building }: BuildingProps) {
  return <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => removeBuilding(building.id)}>
          <DeleteIcon/>
        </IconButton>
      }
    >
      <ListItemButton onClick={() => openBuilding(building.id)}>
        <ListItemAvatar>
          <Avatar>
            <BedroomParentIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`Building ID: ${building.id}`}
          secondary={`No. of rooms: ${Object.keys(building.rooms).length}`}
        />
      </ListItemButton>
    </ListItem>;
}
