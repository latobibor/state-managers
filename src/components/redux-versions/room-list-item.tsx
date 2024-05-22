import { Room } from '../../shared-types/rooms.ts';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeRoom, selectRoom } from '../../redux/room-manager/room-manager-slice.ts';

interface RoomListItemProps {
  room: Room;
}

export function RoomListItem({ room }: RoomListItemProps) {
  return <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete" onClick={() => removeRoom(room.id)}>
        <DeleteIcon/>
      </IconButton>
    }
  >
    <ListItemButton onClick={() => selectRoom(room.id)}>
      <ListItemAvatar>
        <Avatar>
          <BedroomParentIcon/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`Room ID: ${room.id}`}
      />
    </ListItemButton>
  </ListItem>;
}
