import { Room, RoomType } from '../../shared-types/rooms.ts';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ChairIcon from '@mui/icons-material/Chair';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { useOvermindActions } from '../../overmind/overmind-config.ts';

interface RoomListItemProps {
  room: Room;
}

export function RoomListItem({ room }: RoomListItemProps) {
  const { roomManager: { selectRoom, removeRoom } } = useOvermindActions();

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
          <RoomTypeIcon type={room.type}/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${room.id}`}
        secondary={room.type}
      />
    </ListItemButton>
  </ListItem>;
}

interface RoomTypeIconProps {
  type: RoomType;
}

function RoomTypeIcon({ type }: RoomTypeIconProps) {
  switch (type) {
    case RoomType.Bathroom:
      return <BathtubIcon/>;
    case RoomType.Bedroom:
      return <BedroomParentIcon/>;
    case RoomType.ServiceRoom:
      return <LocalLaundryServiceIcon/>;
    case RoomType.CommunalArea:
      return <ChairIcon/>;
    case RoomType.Kitchen:
      return <KitchenIcon/>;
  }
}
