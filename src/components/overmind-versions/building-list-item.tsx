import { useOvermindActions } from '../../overmind/overmind-config.ts';
import { Building } from '../../shared-types/rooms.ts';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import HotelIcon from '@mui/icons-material/Hotel';

interface BuildingProps {
  building: Building;
}

export function BuildingListItem({ building }: BuildingProps) {
  const { buildingManager: { openBuilding, removeBuilding } } = useOvermindActions();

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
          <HotelIcon/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`Building: ${building.name}`}
        secondary={`ID: ${building.id}. Rooms: ${Object.keys(building.rooms).length}`}
      />
    </ListItemButton>
  </ListItem>;
}
