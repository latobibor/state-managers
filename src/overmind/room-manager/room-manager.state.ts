import { Room } from '../../shared-types/rooms.ts';

export type RoomManagerState = {
  roomBeingEdited?: Room;
}

export const roomManagerState: RoomManagerState = {
  roomBeingEdited: undefined,
};
